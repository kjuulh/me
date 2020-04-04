import { Injectable, ErrorHandler } from "@angular/core";
import * as Sentry from "@sentry/browser";
import LogRocket from "logrocket";
import { environment } from "../../environments/environment";

if (environment.production) {
  // new Promise(() => {
  // LogRocket.init("pqcelz/me-ojlns");
  // Sentry.init({
  //  dsn: "https://b87008aa289548ca9ed981ba1e1e8f5e@sentry.io/5188771"
  // });
  // LogRocket.getSessionURL(sessionUrl => {
  //  Sentry.configureScope(scope => {
  //    scope.setExtra("sessionURL", sessionUrl);
  //  });
  // });
  // });
}

@Injectable({
  providedIn: "root"
})
export class SentryService implements ErrorHandler {
  constructor() {}
  handleError(error: any) {
    if (environment.production) {
      // const eventId = Sentry.captureException(error.originalError || error);
      // Sentry.showReportDialog({ eventId });
    }
  }
}
