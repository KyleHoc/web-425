//Author: Kyle Hochdoerfer
//Title: base-layout.component.ts
//Date: 11/20/23
//Description: Typescript for base-layout component

//Import Component and oninit from angular
import { Component, OnInit } from '@angular/core';

//Create and export the base-layout component
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //Define an assignment string variable
  assignment: string;

  //Declare a constructor
  constructor() {
    //Set the value of assignment to the assignment name
    this.assignment = 'Exercise 6.3: Layouts'
   }

  ngOnInit(): void {
  }

}
