import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let annotationData = [
      [new Date(2314, 2, 15), 12400, undefined, undefined,
                              10645, undefined, undefined],
      [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
                              12374, undefined, undefined],
      [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
                              15766, 'Gallantors', 'First Encounter'],
      [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
                              34334, 'Gallantors', 'Statement of shared principles'],
      [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
                              66467, 'Gallantors', 'Mysteries revealed'],
      [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
                              79463, 'Gallantors', 'Omniscience achieved']
    ];
    let annotationColumn = [['date', 'Date'],['number', 'Kepler-22b mission'],['string', 'Kepler title'],['string', 'Kepler text'],['number', 'Gliese 163 mission'],['string', 'Gliese title'],['string', 'Gliese text']]
    let annotationOptions = {
      displayAnnotations: true
    };
    this.chart.title = 'Sales';
    this.chart.type = 'AnnotationChart';
    this.chart.data = annotationData;
    this.chart.columnNames = annotationColumn;
    this.chart.options = annotationOptions;
  }


}
