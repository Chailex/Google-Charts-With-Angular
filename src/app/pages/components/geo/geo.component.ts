import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let geoData = [
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ];
    let geoColumn = ['Country', 'Popularity'];
    let geoOptions = {};
    this.chart.title = 'Popularity of cricket sport in different countries';
    this.chart.type = 'GeoChart';
    this.chart.data = geoData;
    this.chart.columnNames = geoColumn;
    this.chart.options = geoOptions;
  }

}
