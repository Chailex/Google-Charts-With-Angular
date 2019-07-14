import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  chart:any;
  chart1:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    this.chart1 = {};

    let myData = [
      ['January', 81000, '#b87333'],
       ['February', 85000, 'red'],
      ['Mars', 45000, "blue"],
      ['April', 34000, "green"],
      ['May', 39000, 'pink'],
      ['June',76000, 'violet'],
      ['July',44000, '#c87993'],
      ['August',45000, '#a81433'],
      ['September',68000, '#e87533'],
      ['October',98000, '#b87377'],
      ['November',67000, '#f84339'],
      ['December',64000, '#d87353']
      
    ];
    let myColumnNames = ['Month', 'Expense',{role: 'style'}];
    let myOptions = {
      colors: ['#e0440e', '#875F9A', '#19B5FE', '#7A942E', '#FFA400'],
      animation: {
        duration: 2000,
        easing: 'out',
        startup: true
      },};

    this.chart.title = 'Expenses per month';
    this.chart.type = "LineChart";
    this.chart.data = myData;
    this.chart.columnNames = myColumnNames;
    this.chart.options = myOptions;
    this.chart.height = 500

    //---------------------------2nd 
    
    let myData1 = [
      ['January', 210, '#b87333'],
       ['February', 250, 'red'],
      ['Mars', 350, "blue"],
      ['April', 440, "green"],
      ['May', 290, 'pink'],
      ['June',360, 'violet'],
      ['July',540, '#c87993'],
      ['August',450, '#a81433'],
      ['September',580, '#e87533'],
      ['October',680, '#b87377'],
      ['November',670, '#f84339'],
      ['December',640, '#d87353']
      
    ];
    let myColumnNames1 = ['Month', 'Customers',{role: 'style'}];
    let myOptions1 = {
      colors: ['#e0440e', '#875F9A', '#19B5FE', '#7A942E', '#FFA400'],
      animation: {
        duration: 2000,
        easing: 'out',
        startup: true
      },};

    this.chart1.title = 'Customers per month';
    this.chart1.type = "LineChart";
    this.chart1.data = myData1;
    this.chart1.columnNames = myColumnNames1;
    this.chart1.options = myOptions1;
    this.chart1.height = 500
  }

}
