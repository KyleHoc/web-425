//Author: Kyle Hochdoerfer
//Title: app-routing.module.ts
//Date: 11/13/23
//Description: Routing for in-and-out-books

//Import ngmodule, routes, and all app components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//Create routes for book list, contact, and about components, with booklist as the default
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

//Create and export the app routing module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
