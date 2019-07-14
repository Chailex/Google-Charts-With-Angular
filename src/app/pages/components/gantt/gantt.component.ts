import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let ganttData = [
      ['Research', 'Find sources',
       new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
      ['Write', 'Write paper',
       null, new Date(2015, 0, 9), this.daysToMilliseconds(3), 25, 'Research,Outline'],
      ['Cite', 'Create bibliography',
       null, new Date(2015, 0, 7), this.daysToMilliseconds(1), 20, 'Research'],
      ['Complete', 'Hand in paper',
       null, new Date(2015, 0, 10), this.daysToMilliseconds(1), 0, 'Cite,Write'],
      ['Outline', 'Outline paper',
       null, new Date(2015, 0, 6), this.daysToMilliseconds(1), 100, 'Research']
    ];
    let ganttColumn = [['string', 'Task ID'],['string', 'Task Name'],['date', 'Start Date'],['date', 'End Date'],['number', 'Duration'],['number', 'Percent Complete'],['string', 'Dependencies']];
    
    let ganttOptions = {
      height: 275
    };
    
        this.chart.title = 'Sales';
        this.chart.type = 'Gantt';
        this.chart.data = ganttData;
        this.chart.columnNames = ganttColumn;
        this.chart.options = ganttOptions;
        
  }
  daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;

}
}
