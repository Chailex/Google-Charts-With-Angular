import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  chart : any;
  constructor() { }

  ngOnInit() {
    this.chart = {};

    let myData = [
      ['2016', 84],
      ['2017', 81],
      ['2018', 90],
      ['2019', 95],
      
    ];
    let myColumnNames = ['Year', 'percentage'];
    let myOptions1 = {
      colors: ['#e0440e', '#875F9A', '#19B5FE', '#7A942E', '#FFA400'],
      animation: {
        duration: 2000,
        easing: 'out',
        startup: true
      },};

    this.chart.title = 'Pass percenatge every year';
    this.chart.type = 'ColumnChart';
    this.chart.data = myData;
    this.chart.columnNames = myColumnNames;
    this.chart.options = myOptions1;
    this.chart.height = 500
  }

}
