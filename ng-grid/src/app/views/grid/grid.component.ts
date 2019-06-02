import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  rows: number = 100;
  columns: number = 10;

  addRows(count: number) {
    this.rows += count;
  }

  removeRows(count: number){
    this.rows -= this.rows > count ? count : this.rows;
  }

  clearRows() {
    this.rows = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
