import { Component, OnInit, HostListener, ElementRef } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  static: boolean;
  menu = false;

  icon = "/assets/Vector.svg";

  constructor(public el: ElementRef) {}

  ngOnInit() {
    if (typeof window !== "undefined") {
      this.checkResize(window.innerWidth);
    }
  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    if (typeof window !== "undefined") {
      const componentPos = this.el.nativeElement.offsetTop;
      const scrollPos = window.pageYOffset;

      if (scrollPos > componentPos) {
        this.static = true;
      } else {
        this.static = false;
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (typeof window !== "undefined") {
      this.checkResize(event.target.innerWidth);
    }
  }

  checkResize(width) {
    if (width > 600) {
      this.menu = false;
    } else {
      this.menu = true;
    }
  }

  about() {
    document.querySelector(".about").scrollIntoView({behavior: 'smooth'})
  }

  skills() {
    document.querySelector(".skills").scrollIntoView({behavior: 'smooth'})
  }

  experience() {
    document.querySelector(".experience").scrollIntoView({behavior: 'smooth'})
  }
}
