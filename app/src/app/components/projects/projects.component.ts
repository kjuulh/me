import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: "name",
      link: "link",
      technologies: ["one", "two"],
      picture: "image"
    },
    {
      name: "name",
      link: "link",
      technologies: ["one", "two"],
      picture: "image"
    },
    {
      name: "name",
      link: "link",
      technologies: ["one", "two"],
      picture: "image"
    },
    {
      name: "name",
      link: "link",
      technologies: ["one", "two"],
      picture: "image"
    },
    {
      name: "name",
      link: "link",
      technologies: ["one", "two"],
      picture: "image"
    },
    {
      name: "name",
      link: "link",
      technologies: ["one", "two"],
      picture: "image"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
