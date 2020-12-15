import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { Observable } from "rxjs";
import { v4 as uuid } from "uuid";

import { Dashboard, DashboardItem } from "../models/dashboard";

@Injectable({
  providedIn: "root"
})
export class LayoutService {
  public options: GridsterConfig = {
    draggable: {
      enabled: false
    },
    pushItems: false,
    resizable: {
      enabled: false
    }
  };
  public layout: DashboardItem[] = [];
  private dashboard: Dashboard;

  constructor(private http: HttpClient) {
    this.loadDashboard().subscribe({
      next: dashboard => {
        if (dashboard && dashboard.tabs) {
          this.dashboard = dashboard;
          this.layout = dashboard.tabs[0].layout;
        }
      }
    });
  }

  addItem(): void {
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

  loadDashboard(): Observable<Dashboard> {
    const requestUrl = `../../rest/ui/dashboard`;
    return this.http.get<Dashboard>(requestUrl);
  }

  updateDashboard(): Observable<any> {
    const requestUrl = `../../rest/ui/dashboard`;
    return this.http.post(requestUrl, this.dashboard);
  }
}
