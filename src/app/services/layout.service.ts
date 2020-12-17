import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GridsterConfig } from "angular-gridster2";
import { Observable } from "rxjs";


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
    },
    margin: 3
  };
  public layout: DashboardItem[] = [];

  constructor(private http: HttpClient) { }

  loadDashboard(): Observable<Dashboard> {
    const requestUrl = `../../rest/ui/dashboard`;
    return this.http.get<Dashboard>(requestUrl);
  }

  updateDashboard(dashboard: Dashboard): Observable<any> {
    const requestUrl = `../../rest/ui/dashboard`;
    return this.http.post(requestUrl, dashboard);
  }
}
