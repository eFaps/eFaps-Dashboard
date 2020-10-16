import { Injector, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridsterModule } from 'angular-gridster2';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    GridsterModule,
  ],
  providers: [],
})
export class DashboardModule {
  constructor(injector: Injector) {
     const dashboardComponent = createCustomElement(DashboardComponent, { injector });
     customElements.define('efaps-dashboard', dashboardComponent);
   }
   ngDoBootstrap() {}
 }
