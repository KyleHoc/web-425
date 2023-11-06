//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 10/24/23
//Description: Typescript for app.modules.ts

//Import Router, Browser, and Ng Modules from Angular
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import all components and app routes from their respective files
import { AppComponent } from './app.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { SigninComponent } from './signin/signin.component';


//Set-up NgModule, declaring all components, importing browser and router modules, and implementing bootstrap
@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//Export the AppModule
export class AppModule { }
