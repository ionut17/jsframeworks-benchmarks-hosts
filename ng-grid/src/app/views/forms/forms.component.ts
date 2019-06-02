import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  count: number[];
  dropdownValues: string[] = Array.from(Array(this.count)).map((v,i)=>`Value ${i+1}`);

  constructor() { }

  ngOnInit() {
    this.count = Array(100).fill(0);
  }

}
