import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepped',
  templateUrl: './stepped.component.html',
  styleUrls: ['./stepped.component.css']
})
export class SteppedComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let steppedData = [
      ['Alfred Hitchcock (1935)', 8.4,         7.9],
      ['Ralph Thomas (1959)',     6.9,         6.5],
      ['Don Sharp (1978)',        6.5,         6.4],
      ['James Hawes (2008)',      4.4,         6.2]
    ];
    let steppedColumn = ['Director (Year)',  'Rotten Tomatoes', 'IMDB'];
    let steppedOptions = {
      title: 'The decline of \'The 39 Steps\'',
      vAxis: {title: 'Accumulated Rating'},
      isStacked: true
    };

    this.chart.title = 'Sales';
    this.chart.type = 'SteppedAreaChart';
    this.chart.data = steppedData;
    this.chart.columnNames = steppedColumn;
    this.chart.options = steppedOptions;
  }

}
