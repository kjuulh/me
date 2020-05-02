import { Injectable } from "@angular/core";
import { AppConfig } from "../models/app.config";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  config$: Observable<AppConfig>;

  constructor() {}
}
