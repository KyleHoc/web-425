//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 10/30/23
//Description: Typescript for Home component

//Import component, oninit, and activated route from Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Create home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//Export Home Component class
export class HomeComponent implements OnInit {

  //Create a constructor that determines if the user is logged in
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
