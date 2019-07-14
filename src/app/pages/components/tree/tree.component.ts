import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let treeData = [
      ['Global',    null,                 0,                               0],
      ['America',   'Global',             0,                               0],
      ['Europe',    'Global',             0,                               0],
      ['Asia',      'Global',             0,                               0],
      ['Australia', 'Global',             0,                               0],
      ['Africa',    'Global',             0,                               0],
      ['Brazil',    'America',            11,                              10],
      ['USA',       'America',            52,                              31],
      ['Mexico',    'America',            24,                              12],
      ['Canada',    'America',            16,                              -23],
      ['France',    'Europe',             42,                              -11],
      ['Germany',   'Europe',             31,                              -2],
      ['Sweden',    'Europe',             22,                              -13],
      ['Italy',     'Europe',             17,                              4],
      ['UK',        'Europe',             21,                              -5],
      ['China',     'Asia',               36,                              4],
      ['Japan',     'Asia',               20,                              -12],
      ['India',     'Asia',               40,                              63],
      ['Laos',      'Asia',               4,                               34],
      ['Mongolia',  'Asia',               1,                               -5],
      ['Israel',    'Asia',               12,                              24],
      ['Iran',      'Asia',               18,                              13],
      ['Pakistan',  'Asia',               11,                              -52],
      ['Egypt',     'Africa',             21,                              0],
      ['S. Africa', 'Africa',             30,                              43],
      ['Sudan',     'Africa',             12,                              2],
      ['Congo',     'Africa',             10,                              12],
      ['Zaire',     'Africa',             8,                               10]
    ];
  let treeColumn = ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'];
  let treeOptions = {
    highlightOnMouseOver: true,
    maxDepth: 1,
    maxPostDepth: 2,
    minHighlightColor: '#8c6bb1',
    midHighlightColor: '#9ebcda',
    maxHighlightColor: '#edf8fb',
    minColor: '#009688',
    midColor: '#f7f7f7',
    maxColor: '#ee8100',
    headerHeight: 15,
    showScale: true,
    height: 500,
    useWeightedAverageForAggregation: true
  };
    this.chart.title = 'Sales';
    this.chart.type = 'TreeMap';
    this.chart.data = treeData;
    this.chart.columnNames = treeColumn;
    this.chart.options = treeOptions;
  }

}
