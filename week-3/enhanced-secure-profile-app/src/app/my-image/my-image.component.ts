//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 10/30/23
//Description: Typescript file for my-image component

//Import Component and Oninit from angular
import { Component, OnInit } from '@angular/core';

//Create and export my-image component
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  //Leave my-image constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
