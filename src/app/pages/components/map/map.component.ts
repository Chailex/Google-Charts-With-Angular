import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    let mapData = [
      
      [37.4232, -122.0853, 'Work'],
      [37.4289, -122.1697, 'University'],
      [37.6153, -122.3900, 'Airport'],
      [37.4422, -122.1731, 'Shopping']
    ];
    let mapColumn = ['Lat', 'Long', 'Name'];
    let mapOptions = {
      icons: {
        default: {
          normal: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png',
          selected: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Right-Azure-icon.png'
        }
      }
    };

    this.chart.title = 'Sales';
    this.chart.type = 'Map';
    this.chart.data = mapData;
    this.chart.columnNames = mapColumn;
    this.chart.options = mapOptions;
  }

}
