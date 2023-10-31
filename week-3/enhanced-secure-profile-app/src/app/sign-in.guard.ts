//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 10/31/23
//Description: Typescript for sign-in guard

//Imports from Angular and rxjs
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

//Create a sign-in guard class that implements CanActivate
export class SignInGuard implements CanActivate {

  //Create a constructor using the router
  constructor(private router: Router){

  }

  //Create a CanActivate route guard
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //Set is logged in equal to the boolean value of the next query params
    let isLoggedIn = next.queryParams.isLoggedIn;

    //If isLoggedIn is true:
    if(isLoggedIn){
      //Return true
      return true;
    } else {
      //Otherwise navigate to the default route and return false
      this.router.navigate(['/'])
      return false
    }
  }
}
