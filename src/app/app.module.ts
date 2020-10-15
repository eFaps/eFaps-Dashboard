import { Injector, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
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
