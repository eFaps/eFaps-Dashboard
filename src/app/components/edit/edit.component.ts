import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {
  Widget,
  WidgetType,
  DashboardItem,
  Column,
  TableWidget
} from "src/app/models/dashboard";
import { v4 as uuid } from "uuid";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  selectedType: WidgetType;
  widget: Widget;
  widgetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DashboardItem
  ) { }

  ngOnInit(): void {
    const type = this.data.widget ? this.data.widget.type : "";
    const eql = this.data.widget ? this.data.widget.eql : "";
    this.widgetForm = this.fb.group({
      type: [type],
      eql: [eql],
      columns: this.fb.array([])
    });
    this.selectedType = WidgetType[type];
    this.widget = this.data.widget;
    switch (this.selectedType) {
      case "TABLE":
        if (
          (<TableWidget>this.widget).columns != null &&
          (<TableWidget>this.widget).columns.length > 0
        ) {
          (<TableWidget>this.widget).columns.forEach(column => {
            (<FormArray>this.widgetForm.controls.columns).push(
              this.fb.group({
                header: [column.header],
                field: [column.field]
              })
            );
          });
        } else {
          this.addColumn();
        }
        break;
    }
  }

  get types() {
    const types = [];
    for (var type in WidgetType) {
      types.push(type);
    }
    return types;
  }

  save() {
    let identifier = "";
    if (this.data.widget && this.data.widget.identifier) {
      identifier = this.data.widget.identifier;
    } else {
      identifier = uuid();
    }
    const eql = this.widgetForm.value.eql;
    this.data.widget = { identifier, type: this.selectedType, eql };
    switch (this.selectedType) {
      case "TABLE":
        (<TableWidget>this.data.widget).columns = this.widgetForm.value.columns;
      default:
        break;
    }

    this.dialogRef.close(this.data);
  }

  get columns(): Column[] {
    return (<TableWidget>this.widget).columns;
  }

  addColumn() {
    (<FormArray>this.widgetForm.controls.columns).push(
      this.fb.group({
        header: [],
        field: []
      })
    );
  }
}
