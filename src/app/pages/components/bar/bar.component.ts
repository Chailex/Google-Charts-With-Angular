import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};

    
    let myData = [
      ['January', 81, '#b87333'],
       ['February', 85, 'red'],
      ['Mars', 22, "blue"],
      ['April', 34, "green"],
      ['May', 39, 'pink'],
      ['June',23, 'violet'],
      ['July',44, '#c87993'],
      ['August',45, '#a81433'],
      ['September',68, '#b87533'],
      ['October',98, '#b87377'],
      ['November',67, '#b84333'],
      ['December',56, '#d87333']
      
    ];
    let myColumnNames = ['Month', 'Riders', {role:'style'}];
    let myOptions1 = {
      animation: {
        duration: 2000,
        easing: 'out',
        startup: true
      },};

    this.chart.title = 'No. of riders joined per month in the year 2019';
    this.chart.type = "BarChart";
    this.chart.data = myData;
    this.chart.columnNames = myColumnNames;
    this.chart.options = myOptions1;
    this.chart.height = 500
  }

}
