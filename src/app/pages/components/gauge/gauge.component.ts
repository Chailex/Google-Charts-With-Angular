import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart ={};
    let gaugeData = [
      ['Pressuse', 32],
    ];
    let gaugeOptions = {
      width: 500, height: 500,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    let gaugeColumn = ['Label', 'Value'];
    this.chart.title = 'Apollo Tyre data';
    this.chart.type = 'Gauge';
    this.chart.data = gaugeData;
    this.chart.columnNames = gaugeColumn;
    this.chart.options = gaugeOptions;
  }

}
