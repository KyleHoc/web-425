//Author: Kyle Hochdoerfer
//Title: composer-list.components.ts
//Date: 10/25/23
//Description: Typescript composer list component

//Import component and oninit from angular
import { Component, OnInit } from '@angular/core';

//Define and export a composer class
export default class Composer{

  //Declare fullName and genre string variables
  fullName: string;
  genre: string;

  //Create a constructor to initialize fullName and genre
  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

//Create and export a component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //Declare an array of composer objects as part of the component
  composers: Array<Composer>;

  //Fill the composers array with composer data
  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
