import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let myData = [
      ['Assam', 636000],
      ['Delhi', 998000],
      ['Kolkata', 744000],
      ['Tamil Nadu', 970000],
      ['Bihar', 500000],
      
    ];
    let myColumnNames = ['State', 'No. of users'];
    let myOptions1 = {
      colors: ['#e0440e', '#875F9A', '#19B5FE', '#7A942E', '#FFA400'],
      animation: {
        duration: 2000,
        easing: 'out',
        startup: true
      },};

    this.chart.title = 'No. of reliance users in different states';
    this.chart.type = 'AreaChart';
    this.chart.data = myData;
    this.chart.columnNames = myColumnNames;
    this.chart.options = myOptions1;
    this.chart.height = 500
  }

}
