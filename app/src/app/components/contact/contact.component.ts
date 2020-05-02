import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ConfigService } from "src/app/service/config.service";
import { ContactService, Contact } from "src/app/service/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    message: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private contact: ContactService) {}

  ngOnInit(): void {}

  submitContactForm() {
    this.contact.addContact(this.contactForm.value).subscribe(
      (data: Contact) => {
        alert("Succesfully sent!");
      },
      (err) => console.error(err),
      () => {
        this.contactForm.reset();
      }
    );
  }
}
