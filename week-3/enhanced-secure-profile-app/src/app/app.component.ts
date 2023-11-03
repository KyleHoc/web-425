//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 10/24/23
//Description: Typescript for main app component

//Import component from angular
import { Component } from '@angular/core';

//Create the app component, setting its HTML and CSS pages
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Export and declare an app component class
export class AppComponent {
  //Create a variable to see if the user is logged in and set it to true
  isLoggedIn: boolean = true;

  //Declare a variable to hold the assignment name
  assignment = 'Assignment 3.4: Guarding Routes';
}
