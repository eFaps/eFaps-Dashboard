import { GridsterItem } from "angular-gridster2";

export interface DashboardItem extends GridsterItem {
  widget?: Widget;
}

export interface Dashboard {
  tabs: Tab[];
}

export interface Tab {
  layout: DashboardItem[];
}

export interface Widget {
  identifier: string;
  type: WidgetType;
  eql: string;
}

export enum WidgetType {
  BARCHART = "BARCHART",
  TABLE = "TABLE"
}
