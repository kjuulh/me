import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit {
  @Input() work: any;
  constructor() {}

  ngOnInit() {}
}
