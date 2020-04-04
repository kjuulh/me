import { Component, OnInit } from "@angular/core";

import {
  faFacebookF,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  faFacebook = faFacebookF;
  faGithub = faGithub;
  faLinkedIn = faLinkedin;

  placeholder = "https://www.placecage.com/10/20";
  meImage = "/assets/me.jpg";

  constructor() {}

  ngOnInit() {}
}
