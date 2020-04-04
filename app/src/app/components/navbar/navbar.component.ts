import { Component, OnInit, HostListener, ElementRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  static: boolean;
  menu = false;

  icon = "/assets/Vector.svg";

  constructor(public el: ElementRef) {}

  ngOnInit() {
    this.checkResize(window.innerWidth);
  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const componentPos = this.el.nativeElement.offsetTop;
    const scrollPos = window.pageYOffset;

    if (scrollPos > componentPos) {
      this.static = true;
    } else {
      this.static = false;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.checkResize(event.target.innerWidth);
  }

  checkResize(width) {
    if (width > 600) {
      this.menu = false;
    } else {
      this.menu = true;
    }
  }
}
