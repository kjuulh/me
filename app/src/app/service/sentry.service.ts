import LogRocket from "logrocket";
import * as Sentry from "@sentry/browser";
import { Injectable, ErrorHandler } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SentryService implements ErrorHandler {
  constructor() {
    if (environment.production) {
      LogRocket.init("pqcelz/me-ojlns");
      Sentry.init({
        dsn: "https://b87008aa289548ca9ed981ba1e1e8f5e@sentry.io/5188771",
      });
      LogRocket.getSessionURL((sessionUrl) => {
        Sentry.configureScope((scope) => {
          scope.setExtra("sessionURL", sessionUrl);
        });
      });
    }
  }
  handleError(error: any) {
    if (environment.production) {
      const eventId = Sentry.captureException(error.originalError || error);
      Sentry.showReportDialog({ eventId });
    }
  }
}
