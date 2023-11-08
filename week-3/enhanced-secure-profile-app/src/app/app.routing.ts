//Author: Kyle Hochdoerfer
//Title: app.routing.ts
//Date: 10/30/23
//Description: App routing for secure profile app

//Import routes and components
import { Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SigninComponent } from "./signin/signin.component";
import { SignInGuard } from "./sign-in.guard";

//Add routes for home and the sign-in component
export const AppRoutes: Routes = [
  {
    //Set default route to sign-in component
    path: '',
    component: SigninComponent
  },
  {
    //Create route to home component that activates signin guard
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
