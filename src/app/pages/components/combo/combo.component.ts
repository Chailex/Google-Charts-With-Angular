import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let comboData = [
      
      ['2015-2016',  565,      938,         522,             998,           450],
      ['2016-2017',  635,      1120,        599,             1268,          688],
      ['2017-2018',  457,      1167,        587,             807,           695],
      ['2018-2019',  539,      1110,        615,             968,           715],
      ['2019-2020',  636,      991,         629,             1026,          866]
    ];
    let comboOptions = {
      title : 'Total number of students in different schools',
      vAxis: {title: 'No. of students'},
      hAxis: {title: 'Year'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    let comboColumn = ['Year', 'K.V', 'Delhi Public', "Maria's", 'Gurukul', 'SFS'];

    this.chart.title = 'Comparison of students in different schools';
    this.chart.type = 'ComboChart';
    this.chart.data = comboData;
    this.chart.columnNames = comboColumn;
    this.chart.options = comboOptions;
    this.chart.height = 500;
  }

}
