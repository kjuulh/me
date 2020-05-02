import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConfigService } from "src/app/service/config.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl(""),
  });

  constructor(private configService: ConfigService) {
    this.configService.config$.subscribe((data) => {
      console.dir(data);
    });
  }

  ngOnInit(): void {}
}
