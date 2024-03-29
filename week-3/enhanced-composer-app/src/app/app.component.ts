//Author: Kyle Hochdoerfer
//Title: composer.class.ts
//Date: 10/30/23
//Description: Typescript file for app component

//Import component from angular
import { Component } from '@angular/core';

//Create a root component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Export appComponent
export class AppComponent {
  //Declare a variable for the assignment name
  assignment = "Exercise 3.2 - Passing Data to Routes, Part 1"
}
