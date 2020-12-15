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
    this.widgetForm = this.fb.group({
      type: [this.data.widget.type],
      eql: [this.data.widget.eql]
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
