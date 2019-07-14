import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  chart:any;
  chart1:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    this.chart1 = {};
    // let tableData = [
    //   ['Mike',  {v: 10000, f: '$10,000'}, true],
    //   ['Jim',   {v:8000,   f: '$8,000'},  false],
    //   ['Alice', {v: 12500, f: '$12,500'}, true],
    //   ['Bob',   {v: 7000,  f: '$7,000'},  true]
    // ];
    // let tableColumn = [['string', 'Name'],['number', 'Salary'],['boolean', 'Full Time Employee']];
    let tableData = [['Company','Kilometers'],['Apollo', {v: 40000, f: 40000}],
  ['CEAT', {v:130000, f: 130000}],
['TVS', {v: 250000, f: 250000}],
['MRF', {v: 150000, f: 150000}],
['JK Tyre', {v: 250000, f: 250000}]];
let tableColumn = [['string','Company'],['number', 'Kilometers']]
    let tableOptions = {};
    this.chart.title = 'Sales';
    this.chart.type = 'Table';
    this.chart.data = tableData;
    this.chart.columnNames = tableColumn;
    this.chart.options = tableOptions;
    this.chart.height = 500;
    this.chart.width = 500;
    //---------------data2
    let tableData1 = [['Making on the Tyre','Km/h','mph'],['H',210,130],['V',240,149],['W',270,168],['Y',300,186]]
    let tableColumn1 = [['string','Making on the tyre'],['number', 'Km/h'],['number','mph']]
    let tableOptions1 = {};
    this.chart1.title = 'Sales';
    this.chart1.type = 'Table';
    this.chart1.data = tableData1;
    this.chart1.columnNames = tableColumn1;
    this.chart1.options = tableOptions1;
    this.chart1.height = 500;
    this.chart1.width = 500;
  }

}
