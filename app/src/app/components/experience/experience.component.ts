import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {
  work = [
    {
      position: "Associate Software Engineer",
      focus: ["Software Engineer", "Backend Development", "Crypto-services"],
      company: "Danske Bank",
      description: "",
      start: "01-02-2020",
      end: ""
    },
    {
      position: "Intern Software Engineer",
      focus: ["Software Engineering", "Backend Development"],
      company: "Danske Bank",
      description: "",
      start: "01-9-2018",
      end: "01-01-2019"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
