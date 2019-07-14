import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  chart:any;
  constructor() { }

  ngOnInit() {
    this.chart = {};
    // let wordData =  [ 
    //   ['cats are better than dogs'],
    //   ['cats eat kibble'],
    //   ['cats are better than hamsters'],
    //   ['cats are awesome'],
    //   ['cats are people too'],
    //   ['cats eat mice'],
    //   ['cats meowing'],
    //   ['cats in the cradle'],
    //   ['cats eat mice'],
    //   ['cats in the cradle lyrics'],
    //   ['cats eat kibble'],
    //   ['cats for adoption'],
    //   ['cats are family'],
    //   ['cats eat mice'],
    //   ['cats are better than kittens'],
    //   ['cats are evil'],
    //   ['cats are weird'],
    //   ['cats eat mice'],
    // ];
    let wordData = [ 
      ['Languages python Web2py'],
      ['Languages python PyQt'],
      ['Languages python Django'],
      ['Languages javascript React'],
      ['Languages javascript Angular'],
      ['Languages javascript Vue'],
      ['Languages c++ POCO'],
      ['Languages c++ Asio'],
      ['Languages Ruby'],
      
    ];
    let wordColumn = ['Phrases'];
    let wordOptions = {
      wordtree: {
        format: 'implicit',
        word: 'Languages'
      }
    };
  
  
      this.chart.title = 'Sales';
      this.chart.type = 'WordTree';
      this.chart.data = wordData;
      this.chart.columnNames = wordColumn;
      this.chart.options = wordOptions;
  }

}
