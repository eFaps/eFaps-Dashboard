import { Component, OnInit, Input } from '@angular/core';
import { Widget } from 'src/app/models/dashboard';

@Component({
  selector: 'efaps-dashboard-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  private _widget: Widget;
  constructor() { }

  ngOnInit(): void { }

  @Input()
  set widget(widget: Widget) {
    if (widget) {
      this._widget = widget;
    }
  }

  get widget() {
    return this._widget;
  }
}
