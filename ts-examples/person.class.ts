//Title: person.class.ts
//Author: Kyle Hochdoerfer
//Date: 10/16/23
//Description: Creates and declares person class

//Import person interface from person.interface.ts
import { IPerson } from "./person.interface";

//Declare a person class that implements the person interface
class Person implements IPerson {

    //Declare string variables to hold first and last name
    firstName: string;
    lastName: string;

    //Declare a class constructor to assign first and last name
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Create a new person object with my first and alst name
let myName = new Person("Kyle", "Hochdoerfer")

//Output a string using the person object
console.log(`My name is ${myName.firstName + " " + myName.lastName}`)