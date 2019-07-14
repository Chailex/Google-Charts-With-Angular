import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};

    let myData = [
      ['Playground', 8136],
      ['College Building', 8538],
      ['Canteen', 2244],
      ['Parking', 3470],
      ['Basketball Court', 1950],
      
    ];
    let myColumnNames = ['School area division', 'Area'];
    let myOptions = {
      colors: ['#e0440e', '#875F9A', '#19B5FE', '#7A942E', '#FFA400'],
      is3D: true,
      animation: {
        duration: 2000,
        easing: 'out',
        startup: true
      },
    };

    this.chart.title = 'School area division';
    this.chart.type = "PieChart";
    this.chart.data = myData;
    this.chart.columnNames = myColumnNames;
    this.chart.options = myOptions;
    this.chart.height = 400
    
  }

}
