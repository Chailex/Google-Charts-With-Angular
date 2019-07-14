import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sankey',
  templateUrl: './sankey.component.html',
  styleUrls: ['./sankey.component.css']
})
export class SankeyComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let sankeyData = [
      [ 'A', 'X', 5 ],
      [ 'A', 'Y', 7 ],
      [ 'A', 'Z', 6 ],
      [ 'B', 'X', 2 ],
      [ 'B', 'Y', 9 ],
      [ 'B', 'Z', 4 ]
    ];
    let sankeyColumn = [['string', 'From'],['string', 'To'],['number', 'Weight']];
    let sankeyOptions = {
      width: 600,
    };


    this.chart.title = 'Sales';
    this.chart.type = 'Sankey';
    this.chart.data = sankeyData;
    this.chart.columnNames = sankeyColumn;
    this.chart.options = sankeyOptions;
  }

}
