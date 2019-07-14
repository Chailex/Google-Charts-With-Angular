import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let timelineData =[
      [ '1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ '2', 'John Adams',        new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ '3', 'Thomas Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]];
    let timelineColumn = [{ type: 'string', id: 'Term' },{ type: 'string', id: 'Name' },{ type: 'date', id: 'Start' },{ type: 'date', id: 'End' }];
    let timelineOptions = {
      timeline: { showRowLabels: false }
    };
    this.chart.title = 'Sales';
    this.chart.type = 'Timeline';
    this.chart.data = timelineData;
    this.chart.columnNames = timelineColumn;
    this.chart.options = timelineOptions;
  }

}
