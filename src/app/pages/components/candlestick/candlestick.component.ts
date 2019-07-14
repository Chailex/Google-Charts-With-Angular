import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.css']
})
export class CandlestickComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let candlestickData = [
      ['2015-2016', 300, 380, 440, 490],
      ['2016-2017', 480, 480, 550,650 ],
      ['2017-2018', 390, 490, 530, 630],
      ['2018-2019', 410, 510, 700, 900],
      ['2019-2020', 480, 480, 590, 800],
     
    ];
    let candlestickOptions = {
      legend:'none'
    };
    let candlestickColumn = ["Year","value1","value2","value3","value4"];

    this.chart.title = 'Reliance stocks perforance';
    this.chart.type = 'CandlestickChart';
    this.chart.data = candlestickData;
    this.chart.columnNames = candlestickColumn;
    this.chart.options = candlestickOptions;
    this.chart.height = 1000
  }

}
