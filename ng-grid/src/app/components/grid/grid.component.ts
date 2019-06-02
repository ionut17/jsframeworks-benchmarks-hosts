import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnChanges {

  @Input() columns: number = 5;
  @Input() rows: number = 20;
  arrCols: number[] = [];
  arrRows: number[] = [];

  constructor() { }

  ngOnChanges() {
    this.arrCols = Array(this.columns).fill(0);
    this.arrRows = Array(this.rows).fill(0);
  }

}
