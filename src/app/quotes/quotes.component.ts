import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1,'Iza Bro', 'Socrates, 1200 BC'),
    new Quotes(2,'Waah saa utado?', 'Brayo wa TRM'),
    new Quotes(3,'We move regardless', 'CubeMovers, 2014'),
  ]




  // quotes:Quotes[] = [
  //   {id:1,actualQuote:'Iza Bro', description: 'Socrates, 1200 BC'},
  //   {id:2,actualQuote:'Waah saa utado?', description: 'Brayo wa TRM, 2019'},
  //   {id:3,actualQuote:'We move regardless', description: 'CubeMovers, 2014'},
  //   {id:4,actualQuote:'Masilver mi huspin na mayeng', description: 'Masilver, 2017'},
  //   {id:5,actualQuote:'I am a monument to all your sins', description: 'Gravemind, 2527'},
  //   {id:6,actualQuote:'Everyone can gerrit', description: 'CS Kagwe, 2020'},
  // ];

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
