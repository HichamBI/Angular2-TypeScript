import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { BookService } from "../shared/book.service.ts";

@Component({
    selector: 'sg-books-component',
    template: `
    <sg-book-list-component [bookList]="bookList" (onBookSelected)="onBookSelected($event)" [selectedBook]="selectedBook"></sg-book-list-component>
`,
})
export class BooksComponent implements OnInit {
    bookList: Book[];
    selectedBook: Book;


    constructor(private bookService: BookService) {

    }

    ngOnInit(): void {
        this.bookService.getBookListSlowly().then(books => this.bookList = books);
    }

    onBookSelected(book: Book): void {
        this.selectedBook = book;
    }
}