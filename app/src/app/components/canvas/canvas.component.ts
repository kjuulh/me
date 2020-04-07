import { particle } from "particles.js";
import { Component, OnInit } from "@angular/core";
import LogRocket from "logrocket";

declare var particlesJS: any;

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit {
  ngOnInit() {
    // particlesJS("particles-js", "assets/data/particles.json");
    particlesJS.load(
      "particles-js",
      "assets/data/particlesjs-config.json",
      () => {}
    );
  }
}
