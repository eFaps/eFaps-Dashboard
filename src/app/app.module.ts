import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GridsterModule } from "angular-gridster2";
import { TableModule } from "primeng/table";

import { BarchartComponent } from "./components/barchart/barchart.component";
import { EditComponent } from "./components/edit/edit.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { TableComponent } from "./components/table/table.component";
import { WidgetComponent } from "./components/widget/widget.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    EditComponent,
    WidgetComponent,
    TableComponent,
    BarchartComponent
  ],
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
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    LayoutModule,
    GridsterModule,
    ReactiveFormsModule,
    TableModule
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
  ngDoBootstrap() { }
}
