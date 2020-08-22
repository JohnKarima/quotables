import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1,'Iza Bro', 'Socrates, 1200 BC', 'submitted by Thomas', new Date(2020, 7, 21)),
    new Quotes(2,'Waah saa utado?', 'Brayo wa TRM', 'submitted by Ian', new Date(2019, 4, 6)),
    new Quotes(3,'We move regardless', 'CubeMovers, 2014', 'submitted by Abdul', new Date(2005, 5, 8)),
  ]




  // quotes:Quotes[] = [
  //   {id:1,actualQuote:'Iza Bro', description: 'Socrates, 1200 BC'},
  //   {id:2,actualQuote:'Waah saa utado?', description: 'Brayo wa TRM, 2019'},
  //   {id:3,actualQuote:'We move regardless', description: 'CubeMovers, 2014'},
  //   {id:4,actualQuote:'Masilver mi huspin na mayeng', description: 'Masilver, 2017'},
  //   {id:5,actualQuote:'I am a monument to all your sins', description: 'Gravemind, 2527'},
  //   {id:6,actualQuote:'Everyone can gerrit', description: 'CS Kagwe, 2020'},
  // ];

  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuotes(quotes){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    this.quotes.push(quotes)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
