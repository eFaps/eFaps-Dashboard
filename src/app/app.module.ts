import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from '@rinminase/ng-charts';
import { GridsterModule } from "angular-gridster2";

import { EditComponent } from "./components/edit/edit.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent, LayoutComponent, EditComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    LayoutModule,
    GridsterModule,
    ChartsModule
  ],
  providers: [],
  entryComponents: [LayoutComponent]
})
export class DashboardModule {
  constructor(injector: Injector) {
    const dashboardComponent = createCustomElement(DashboardComponent, {
      injector
    });
    customElements.define("efaps-dashboard", dashboardComponent);
  }
  ngDoBootstrap() {}
}
