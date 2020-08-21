import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    {id:1, name:'Iza Bro', description:'Socrates, 1200 BC'},
    {id:2,name:'Waah saa utado?', description:'Brayo wa TRM, 2019'},
    {id:3,name:'We move regardless', description:'CubeMovers, 2014'},
    {id:4,name:'Masilver mi huspin na mayeng', description:'Masilver, 2017'},
    {id:5,name:'I am a monument to all your sins', description:'Gravemind, 2527'},
    {id:6,name:'Everyone can gerrit', description:'Kagwe, 2020'},
  ];






  constructor() { }

  ngOnInit(): void {
  }

}
