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

  meImage = "/assets/me.jpg";
  mePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAA0ACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP13+Mn7VXjDwl4w/wCEY8PxafZL4VsFvf7OvPCviTVtY12O80mDU7vUNI8V2mo2+gaLpenW8yw32k6nompy3VxFBLFrWnvcW1rN+NYvOZ4HPaeWQpxmuSM5ylUiqqlOM6ihGk1drkhdNPV8ySVrv9ww3DTxHC2M4iniKkPYYhU40Y0W6UoKrSpOc692oyU6tuVxTSUbt83u+Sx/8FAvjoUQpDlCilD/AGHpi5UgbTjy1xxjjauOmB0r66ONxNl+4lsvs+R8W4YW79/r0ba+Wmx/G74h/ag+O2s+KfGnxQufiN4ktvGnj/X7n4j6tqul6vqukpaeILPXdat3t9N03Tr+20pNCu9GsB4en0S+sb6yGiG302JEs7RLd/YrZFl9fM4ZhKjH6zhqDpXcKc41YVacorn5oupGVOzcJQqRdpSTvdt50M9zGlkssrlXqTwWYY72k6catWlKlUw06NRygozdCSq+2s1Vw83Fwi4uy5T+tjwi+k6z4U8MavdaLbJc6r4e0XUrlYZpVhWe+022upliVw7LEJJWEas7sFABZjkn4yrxU6NWpS/s+nL2VSdPm9vJc3JJxvb2Tte17Xdu7Pdhw1TnGM/rc1zRUreyi7cyT359d9z/AP/Z"

  constructor() {}

  ngOnInit() {}
}
