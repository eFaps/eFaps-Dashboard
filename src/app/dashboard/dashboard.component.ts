import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
console.log("---------------222------------")
   }

  ngOnInit(): void {
    console.log("---------------s------------")
  }

}
