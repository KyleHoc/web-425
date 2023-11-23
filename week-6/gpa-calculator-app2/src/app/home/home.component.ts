//Author: Kyle Hochdoerfer
//Title: base-layout.component.ts
//Date: 11/21/23
//Description: Typescript for home component

//Import Component, oninit, and the transcript interface
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

//Create and export the home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Create a transcript entry object variable
  transcriptEntry: ITranscript;

  //Create an array of string values containing each letter grade, and an empty array for holding transcript entires
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];

  //Set gpa total to 0
  gpaTotal: number = 0;

  constructor() {
    //Cast the transcript entry variable to Itranscript
    this.transcriptEntry = {} as ITranscript
   }

  ngOnInit(): void {
  }

  //Create a function for storing transcript entries
  saveEntry(){
    //Push a new transcript entry onto the array
    this.transcriptEntries.push(this.transcriptEntry)

    //Cast transcriptEntry as Itranscript
    this.transcriptEntry = {} as ITranscript
  }

  //Create a function to calculate the GPA
  calculateResults(){
    //Initialize gpa to 0
    let gpa: number = 0;

    //For each entry on the array, add the corresponding gpa value to gpa
    for (let entry of this.transcriptEntries){
      switch(entry.grade){
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }

      //Divide the gpaTotal by the number of transcript entries
      this.gpaTotal = gpa / this.transcriptEntries.length
    }
  }

  //Create a function to clear the list of transcript entires
  clearEntries(){
    //Set the transcript array to be empty, and the gpa total to 0
    this.transcriptEntries = []
    this.gpaTotal = 0;
  }

}
