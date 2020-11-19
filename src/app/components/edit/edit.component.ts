import { Component, OnInit } from '@angular/core';
import { Widget, WidgetType } from 'src/app/models/dashboard';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  selectedType: WidgetType
  widget: Widget

  constructor() { }

  ngOnInit(): void {
  }

  get types() {
    const types = [];
    for (var type in WidgetType) {
    types.push(type)
}
return types;
  }
}
