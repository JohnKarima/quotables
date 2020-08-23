import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1,'Iza Bro', 'Socrates, 1200 BC', 'submitted by Thomas', new Date(2020, 7, 21),-6),
    new Quotes(2,'Waah saa utado?', 'Brayo wa TRM', 'Submitted by Ian', new Date(2019, 4, 6),-2),
    new Quotes(3,'We move regardless', 'CubeMovers, 2014', 'Submitted by Abdul', new Date(2020, 7, 23),-3),
    new Quotes(4,'Masilver, mi huspin na mayeng', 'Masilver, 2017', 'Submitted by Miracle Baby', new Date(2005, 5, 8),-4),
    new Quotes(5,'I am a monument to all your sins', 'Gravemind, 2527', 'Submitted by The Arbitrer', new Date(2020, 5, 8),-5),
    new Quotes(6,'Everyone can gerrit', 'CS Kagwe, 2020', 'Submitted by MoH', new Date(2020, 6, 8),-1),    
  ]
  votes: number;

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the quote "${this.quotes[index].actualQuote}"?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }



  addNewQuotes(quotes){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    this.quotes.push(quotes);
  }

  // upvoteFunc(index){
  //   var up=this.quotes[index].upvote+1;
  //   this.quotes[index].upvote=up;
    
//}
//new adds
  // constructor() {
  //   this.votes = this.votes || 0;
  // }
  // voteUp(): boolean {
  //   this.votes += 1;
  //   return false;
  // }
  // voteDown(): boolean {
  //   this.votes -= 1;
  //   return false;
  // }
  //end of new adds

  sortedQuotes(): Quotes[]{
    return this.quotes.sort((a: Quotes, b: Quotes) => b.votes-a.votes)
  }
  

  ngOnInit(): void {
   }

}




  // quotes:Quotes[] = [
  //   {id:1,actualQuote:'Iza Bro', description: 'Socrates, 1200 BC'},
  //   {id:2,actualQuote:'Waah saa utado?', description: 'Brayo wa TRM, 2019'},
  //   {id:3,actualQuote:'We move regardless', description: 'CubeMovers, 2014'},
  //   {id:4,actualQuote:'Masilver mi huspin na mayeng', description: 'Masilver, 2017'},
  //   {id:5,actualQuote:'I am a monument to all your sins', description: 'Gravemind, 2527'},
  //   {id:6,actualQuote:'Everyone can gerrit', description: 'CS Kagwe, 2020'},
  // ];




