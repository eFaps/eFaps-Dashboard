import { Injectable } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: "root"
})
export class LayoutService {
  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    }
  };
  public layout: GridsterItem[] = [];

  constructor() {}

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
}
