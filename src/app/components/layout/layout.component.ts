import { Component, OnInit } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { LayoutService } from "src/app/services/layout.service";

@Component({
  selector: "efaps-dashboard-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  editMode : boolean = false;
  constructor(public layoutService: LayoutService) {

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
  }

  changedOptions(): void {
    this.layoutService.options.api.optionsChanged();
  }
}
