import { Component, OnInit } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { LayoutService } from "src/app/services/layout.service";

import { EditComponent } from "../edit/edit.component";

@Component({
  selector: "efaps-dashboard-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  editMode: boolean = false;
  constructor(public dialog: MatDialog, public layoutService: LayoutService) {
    console.log("init")
  }
  ngOnInit() {}

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.layoutService.options.pushItems = this.editMode;
    this.layoutService.options.draggable.enabled = this.editMode;
    this.layoutService.options.resizable.enabled = this.editMode;
    this.changedOptions();
    if (!this.editMode) {
      this.layoutService.updateDashboard().subscribe();
    }
  }

  changedOptions(): void {
    this.layoutService.options.api.optionsChanged();
  }

  edit(item) {
    const dialogRef = this.dialog.open(EditComponent, {
      minWidth: '95vw',
      minHeight: '95vh',
      data: item
    });
    console.log(item);
  }
}
