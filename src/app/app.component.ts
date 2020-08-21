import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
    {id:1, name:'Iza Bro'},
    {id:2,name:'Waah saa utado?'},
    {id:3,name:'We move regardless'},
    {id:4,name:'Masilver mi huspin na mayeng'},
    {id:5,name:'I am a monument to all your sins'},
    {id:6,name:'Everyone can gerrit'},
  ];  
}
