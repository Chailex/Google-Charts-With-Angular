import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let orgData = [
      [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
       '', 'The President'],
      [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
       'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', '']
    ];
    let orgColumn = [['string', 'Name'],['string', 'Manager'],['string', 'ToolTip']];
    let orgOptions = {  };

    this.chart.title = 'Sales';
    this.chart.type = 'OrgChart';
    this.chart.data = orgData;
    this.chart.columnNames = orgColumn;
    this.chart.options = orgOptions;
  }

}
