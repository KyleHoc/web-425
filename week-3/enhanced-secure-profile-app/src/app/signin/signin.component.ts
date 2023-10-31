//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 10/30/23
//Description: Typescript for signin component

//Import component oninit, and Router from Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//Create signin component and export component class
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  //Set isLoggedIn to false by default
  isLoggedIn = false;

  //Pass Router into the constructor
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Declare a signin function
  signin(){
    //Set is logged in to true when the function is called and have the router navigate to home
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
