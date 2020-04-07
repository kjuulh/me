import { Component, HostListener, OnInit } from "@angular/core";
import LogRocket from "logrocket";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Me";
  ngOnInit(): void {}
}
