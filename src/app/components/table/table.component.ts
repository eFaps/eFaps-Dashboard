import { Component, Input, OnInit } from "@angular/core";
import { Widget, TableWidget } from "src/app/models/dashboard";
import { WidgetService } from "src/app/services";

@Component({
  selector: "efaps-dashboard-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  private _widget: Widget;
  columns: any[];
  values: any[];

  constructor(private widgetService: WidgetService) { }

  ngOnInit(): void { }

  @Input()
  set widget(widget: Widget) {
    if (widget) {
      this._widget = widget;
      this.load();
    }
  }

  get widget() {
    return this._widget;
  }

  load() {
    this.widgetService.load(this._widget.identifier).subscribe({
      next: widget => {
        if (widget) {
          this.columns = (<TableWidget>widget).columns;
          this.values = (<TableWidget>widget).values;
        }
      }
    });
  }
}
