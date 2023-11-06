//Author: Kyle Hochdoerfer
//Title: composer-list.components.ts
//Date: 10/25/23
//Description: Typescript composer list component

//Import component, IComposer, and oninit from angular
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

//Create and export a component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //Define an array of IComposer
  composers: Array<IComposer>

  //Create a new field for form control
  txtSearchControl = new FormControl('')

  //Create a constructor for the component
  constructor(private composerService: ComposerService) {
      //Set the composer array to equal the value returned by getComposers
      this.composers = this.composerService.getComposers()

      //Create a form control that sends an alert 500 ms after the text field value changes
      this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val))
   }

  ngOnInit(): void {
  }

  //Create a function to filter composers
  filterComposers(name: string){
    //Send an alert using the passed in name
    alert(name)
  }

}
