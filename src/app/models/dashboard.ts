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
  title: string;
  eql: string;
}

export interface TableWidget extends Widget {
  columns: Column[];
  values: any[];
}

export enum WidgetType {
  BARCHART = "BARCHART",
  TABLE = "TABLE"
}

export interface Column {
  field: string;
  header: string;
}
