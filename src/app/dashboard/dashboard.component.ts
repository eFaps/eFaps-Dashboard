import { Component, OnInit } from "@angular/core";

import { Dashboard, Tab } from "../models/dashboard";
import { LayoutService } from "../services";

@Component({
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  dashboard: Dashboard;
  selectedIndex = 0;
  editMode = false;
  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.loadDashboard().subscribe({
      next: dashboard => {
        if (dashboard) {
          this.dashboard = dashboard;
        }
      }
    });
  }

  get tabs() {
    return this.dashboard && this.dashboard.tabs ? this.dashboard.tabs : [];
  }

  addTab() {
    this.dashboard.tabs.push({
      label: "new",
      layout: []
    });
  }

  setSelected(index: number) {
    console.log(index)
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.layoutService.updateDashboard(this.dashboard).subscribe()
    }
  }

  deleteTab(index: number) {
    this.dashboard.tabs.splice(index)
  }


  updateLabel(x, y) {
    console.log()
  }
}
