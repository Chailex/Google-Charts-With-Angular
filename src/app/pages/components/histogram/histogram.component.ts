import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let histogramData = [
      ['Acrocanthosaurus (top-spined lizard)', 12.2],
      ['Albertosaurus (Alberta lizard)', 9.1],
      ['Allosaurus (other lizard)', 12.2],
      ['Apatosaurus (deceptive lizard)', 22.9],
      ];
    let histogramColumn = ['Tyre', 'KMs'];
    let histogramOptions = {
      title: 'Lengths of dinosaurs, in meters',
      legend: { position: 'none' },
    };

    this.chart.title = 'Sales';
    this.chart.type = 'Histogram';
    this.chart.data = histogramData;
    this.chart.columnNames = histogramColumn;
    this.chart.options = histogramOptions;
  }

}
