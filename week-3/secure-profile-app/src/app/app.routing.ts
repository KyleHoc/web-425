//Author: Kyle Hochdoerfer
//Title: app.routing.ts
//Date: 10/30/23
//Description: App routing for secure profile app

//Import routes and components
import { Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SigninComponent } from "./signin/signin.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
]
