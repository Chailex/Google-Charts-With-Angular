import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart ={};
    let calenderData = [
      [ new Date(2012, 3, 13), 37032 ],
      [ new Date(2012, 3, 14), 38024 ],
      [ new Date(2012, 3, 15), 38024 ],
      [ new Date(2012, 3, 16), 38108 ],
      [ new Date(2012, 3, 17), 38229 ],
      [ new Date(2013, 9, 4), 38177 ],
      [ new Date(2013, 9, 5), 38705 ],
      [ new Date(2013, 9, 12), 38210 ],
      [ new Date(2013, 9, 13), 38029 ],
      [ new Date(2013, 9, 19), 38823 ],
      [ new Date(2013, 9, 23), 38345 ],
      [ new Date(2013, 9, 24), 38436 ],
      [ new Date(2013, 9, 30), 38447 ]
    ];
    let calenderOptions = {
      title: "Red Sox Attendance",
      height: 350,
    };

    let calenderColumn = [{type: 'date', id: 'Date'},{type: 'number', id: 'Won/Loss'}];
    this.chart.title = 'Sales';
    this.chart.type = 'Calendar';
    this.chart.data = calenderData;
    this.chart.columnNames = calenderColumn;
    this.chart.options = calenderOptions;
  }

}
