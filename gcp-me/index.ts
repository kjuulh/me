import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import * as cloudflare from "@pulumi/cloudflare";
import * as docker from "@pulumi/docker";

const config = new pulumi.Config();

const gcpProject = gcp.config.project;
if (!gcpProject) {
  throw new Error("gcpProject not set");
}

const envGcpCredentials = process.env.GOOGLE_CREDENTIALS;

const meImageName = "me-app";
let meImage;

if (envGcpCredentials) {
  meImage = new docker.Image(meImageName, {
    imageName: pulumi.interpolate`gcr.io/${gcpProject}/${meImageName}:v1.0.0`,
    build: {
      context: "../",
      dockerfile: "../build/prod.Dockerfile",
    },
    registry: {
      server: "gcr.io",
      username: "_json_key",
      password: envGcpCredentials,
    },
  });
} else {
  meImage = new docker.Image(meImageName, {
    imageName: pulumi.interpolate`gcr.io/${gcpProject}/${meImageName}:v1.0.0`,
    build: {
      context: "../",
      dockerfile: "../build/prod.Dockerfile",
    },
  });
}

const meMail = new gcp.cloudfunctions.HttpCallbackFunction(
  "me-mail-function",
  (req, res) => {
    res.set("Access-Control-Allow-Origin", `https://${Url}`);

    if (req.method === "OPTIONS") {
      // Send response to OPTIONS requests
      res.set("Access-Control-Allow-Methods", "GET");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(204).send("");
    } else {
      res.json(req.body);
    }
  }
);

const meMailInvoker = new gcp.cloudfunctions.FunctionIamMember(
  "me-mail-invoker",
  {
    project: meMail.function.project,
    region: meMail.function.region,
    cloudFunction: meMail.function.name,
    role: "roles/cloudfunctions.invoker",
    member: "allUsers",
  }
);

export const meMailUrl = meMail.httpsTriggerUrl;

const location = gcp.config.region;
if (!location) {
  throw new Error("Location not set");
}

const meService = new gcp.cloudrun.Service("me", {
  location,
  template: {
    spec: {
      containers: [
        {
          image: meImage.imageName,
          resources: {
            limits: {
              memory: "1Gi",
            },
          },
          envs: [
            {
              name: "MAIL_URL",
              value: meMailUrl,
            },
          ],
        },
      ],
      containerConcurrency: 2,
    },
  },
});

interface Custom {
  subdomain: string;
  domain: string;
  cloudflareZoneId: string;
}
const getUrl = (c: Custom) => c.subdomain + "." + c.domain;

const custom = config.requireObject<Custom>("custom");
if (!custom) {
  throw new Error("Custom vars not set");
}
export const Url = getUrl(custom);
const meDomainMapping = new gcp.cloudrun.DomainMapping(
  "me-cloudrun-domain-mapping",
  {
    name: getUrl(custom),
    location: location,
    metadata: {
      namespace: gcpProject,
    },
    spec: {
      routeName: meService.name,
    },
  }
);

meDomainMapping.status.resourceRecords?.apply((records) =>
  records?.forEach((record, index) => {
    if (typeof record.type === "undefined") {
      throw new Error("Resource type is undefined");
    }
    new cloudflare.Record(getUrl(custom) + `-${index}-record`, {
      name: custom.subdomain,
      zoneId: custom.cloudflareZoneId,
      type: record.type,
      value: record.rrdata,
      ttl: 1,
    });
  })
);

const iamMe = new gcp.cloudrun.IamMember("me-everyone", {
  service: meService.name,
  location,
  role: "roles/run.invoker",
  member: "allUsers",
});
