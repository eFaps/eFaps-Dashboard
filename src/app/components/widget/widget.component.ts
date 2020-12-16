import { Component, Input, OnInit } from "@angular/core";
import { Widget, WidgetType } from "src/app/models/dashboard";

@Component({
  selector: "efaps-dashboard-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"]
})
export class WidgetComponent implements OnInit {
  private _widget: Widget;

  constructor() { }

  ngOnInit(): void { }

  @Input()
  set widget(widget: Widget) {
    console.log(widget);
    if (widget) {
      this._widget = widget;
    }
  }

  get widget() {
    return this._widget;
  }
}
