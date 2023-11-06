//Author: Kyle Hochdoerfer
//Title: composer.class.ts
//Date: 10/30/23
//Description: Typescript file for contact component

//Import component and Oninit from Angular
import { Component, OnInit } from '@angular/core';

//Create and export the Contact component with an empty constructor
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
