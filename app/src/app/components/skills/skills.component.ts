import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  technologies = ["C#", "Javascript/Node", "Python", "PL1 - C/C++", "Golang"];
  frameworks = ["ASP.NET Core", "React", "Angular"];
  software = ["Linux", "Git", "Docker", "Kubernetes", "Postgres", "MongoDB"];

  constructor() {}

  ngOnInit() {}
}
