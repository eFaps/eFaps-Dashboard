import { GridsterItem } from 'angular-gridster2';

export interface Dashboard {
  tabs: Tab[]
}

export interface Tab {
  layout: GridsterItem[]
}
