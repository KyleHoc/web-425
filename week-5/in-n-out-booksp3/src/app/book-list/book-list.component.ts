//Author: Kyle Hochdoerfer
//Title: book-list.component.ts
//Date: 11/13/23
//Description: Typescript book-list component

//Importing Component, IBook, Observable, BookService, and dialog components
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs'
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


//Create and export book list component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  //Create an observable array of IBooks
  books: Observable<IBook[]>;

  //Create a header filled with the names of the four book data values
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']

  //Create a book variable of type IBook
  book: IBook;

  //Create a constructor that fills the book array my calling getBooks()
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  //Define a function for outputting book information based on the provided isbn number
  showBookDetails(isbn: string){
    //Set the book object to equal the selected book
    this.book = this.booksService.getBook(isbn);

    //Create a dialog ref object with a book value set to match the current book
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      //Set disableClose to true, and the width to 800px
      disableClose: true,
      width: '800px'
    })

    //Output the book data
    console.log(this.book)

    //When the dialog box is closed, reset the value of book to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
