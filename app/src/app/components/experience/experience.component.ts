import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {
  work = [
    {
      position: "Intern Software Engineer",
      focus: ["Software Engineering", "Backend Development"],
      company: "Dankse Bank",
      description: "asljdf lasjdlfasl;djflasdflkasldk fl;aksdfl;kasl;kdf",
      start: "01-9-2018",
      end: "01-01-2019"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
