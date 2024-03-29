//Author: Kyle Hochdoerfer
//Title: composer.class.ts
//Date: 10/30/23
//Description: Typescript file for about component

//Import Component and OnInit from Angular
import { Component, OnInit } from '@angular/core';

//Create and export the about component with an empty constructor
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
