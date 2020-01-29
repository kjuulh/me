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

  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const componentPos = this.el.nativeElement.offsetTop;
    const scrollPos = window.pageYOffset;

    if (scrollPos >= componentPos) {
      this.static = true;
    } else {
      this.static = false;
    }
  }
}
