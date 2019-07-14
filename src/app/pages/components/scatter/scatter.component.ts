import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};

    let myData = [
      ['2015', 60136000],
      ['2016', 65380000],
      ['2017', 82440000],
      ['2018', 94700000],
      ['2019', 79500000],
      
    ];
    let myColumnNames = ['Year', 'Rupees'];
    let myOptions1 = {
      title:'Reliance annual turnover',
      colors: ['#e0440e', '#875F9A', '#19B5FE', '#7A942E', '#FFA400'],
      animation: {
        duration: 2000,
        easing: 'out',
        startup: true
      },};

    this.chart.title = 'Reliance annual turnover';
    this.chart.type = 'Scatter';
    this.chart.data = myData;
    this.chart.columnNames = myColumnNames;
    this.chart.options = myOptions1;
    this.chart.height = 500;
    this.chart.width = 1200
  }

}
