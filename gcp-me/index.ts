import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';
import * as docker from '@pulumi/docker';

const gcpProject = gcp.config.project;
if (!gcpProject) {
  throw new Error('gcpPRoject not set');
}

const meImageName = 'me-app';
const meImage = new docker.Image(meImageName, {
  imageName: pulumi.interpolate`gcr.io/${gcpProject}/${meImageName}:v1.0.0`,
  build: {
    context: '../',
    dockerfile: '../build/prod.Dockerfile',
  },
});

const location = gcp.config.region;
if (!location) {
  throw new Error('Location not set');
}

const meService = new gcp.cloudrun.Service('me', {
  location,
  template: {
    spec: {
      containers: [
        {
          image: meImage.imageName,
          resources: {
            limits: {
              memory: '1Gi',
            },
          },
        },
      ],
      containerConcurrency: 2,
    },
  },
});

/* Enable once domainmapping supports subdomains
const meDomainMapping = new gcp.cloudrun.DomainMapping(
  'me-cloudrun-domain-mapping',
  {
    name: 'me.kjuulh.io',
    location: location,
    metadata: {
      namespace: gcpProject,
    },
    spec: {
      routeName: meService.name,
    },
  },
);
export const domainMappins = meDomainMapping.status.resourceRecords;
*/

const iamMe = new gcp.cloudrun.IamMember('me-everyone', {
  service: meService.name,
  location,
  role: 'roles/run.invoker',
  member: 'allUsers',
});

export const meUrl = meService.status.url;
