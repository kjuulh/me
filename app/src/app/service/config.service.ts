import { Injectable } from "@angular/core";
import { AppConfig } from "../models/app.config";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  config: AppConfig;

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<AppConfig>("/api/config");
  }

  initApp() {
    return () => {
      this.getConfig()
        .toPromise()
        .then(async (result) => {
          this.config = result;
        });
    };
  }
}
