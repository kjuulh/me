import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { ConfigService } from "./config.service";
import { AppConfig } from "../models/app.config";

export interface Contact {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: "root",
  deps: [ConfigService],
})
export class ContactService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.config.config.mailUrl, contact);
  }
}
