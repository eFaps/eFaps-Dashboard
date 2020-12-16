import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Widget, WidgetType, DashboardItem } from "src/app/models/dashboard";
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
      eql: [eql]
    });
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
    this.dialogRef.close(this.data);
  }
}
