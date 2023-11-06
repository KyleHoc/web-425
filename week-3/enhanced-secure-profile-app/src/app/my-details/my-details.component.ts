//Author: Kyle Hochdoerfer
//Title: my-details.component.ts
//Date: 10/24/23
//Description: Typescript for my-details component

//Import Component and OnInit from Angular
import { Component, OnInit } from '@angular/core';

//Export and declare a Person class
export default class Person{

  //Declare string variables for full name and favorite food and color
  fullName: string
  favoriteFood: string
  favoriteColor: string

  //Declare a keywords array with the requested string values
  keywords = ["#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"]

  //Create a constructor to initialize full name, favorite food and color
  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  //Declare a toString method to output the results to the console
  toString(){
    console.log(`\n Full Name: ${this.fullName} \n Favorite Food: ${this.favoriteFood} \n Favorite Color: ${this.favoriteColor}`)
  }
}

//Create and export the my-details component
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  //Declare a person object set as my profile
  myProfile: Person;

  //Create a constructor for the component, providing my info to it
  constructor() {
    this.myProfile = new Person("Kyle Hochdoerfer", "Salmon", "Purple");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
