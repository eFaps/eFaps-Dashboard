import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { DashboardItem } from "src/app/models/dashboard";
import { LayoutService } from "src/app/services/layout.service";
import { v4 as uuid } from "uuid";

import { EditComponent } from "../edit/edit.component";

@Component({
  selector: "efaps-dashboard-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  _editMode: boolean = false;
  _layout: DashboardItem[] = [];
  constructor(public dialog: MatDialog, public layoutService: LayoutService) { }
  ngOnInit() { }

  @Input()
  set layout(dashboardItems: DashboardItem[]) {
    console.log(dashboardItems);
    if (dashboardItems) {
      this._layout = dashboardItems;
    } else {
      this._layout = [];
    }
  }
  get layout(): DashboardItem[] {
    return this._layout;
  }

  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get editMode() {
    return this._editMode;
  }

  @Input()
  set editMode(editmode: boolean) {
    this._editMode = editmode;
    this.layoutService.options.pushItems = this._editMode;
    this.layoutService.options.draggable.enabled = this._editMode;
    this.layoutService.options.resizable.enabled = this._editMode;
    this.changedOptions();
  }

  changedOptions(): void {
    this.layoutService.options.api.optionsChanged();
  }

  edit(item: GridsterItem) {
    const dialogRef = this.dialog.open(EditComponent, {
      minWidth: "95vw",
      minHeight: "95vh",
      data: item
    });
    dialogRef.afterClosed().subscribe({
      next: data => {
        if (data) {
          //this.layoutService.updateDashboard().subscribe();
        }
      }
    });
    console.log(item);
  }
  addItem() {
    this.layout.push({
      cols: 5,
      id: uuid(),
      rows: 5,
      x: 0,
      y: 0
    });
  }
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }
}
