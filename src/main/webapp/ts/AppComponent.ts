import {Component, OnInit} from '@angular/core';
import {Book} from './Book';
import {BookService} from "./BookService";

@Component({
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .books {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 500px;
  }
  .books li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .books li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .books li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .books .text {
    position: relative;
    top: -3px;
  }
  .books .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    width: 70px;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
    text-align: center;
  }
`],
    selector: 'my-app',
    template: `
    <h2>My Book List</h2>
    <ul class="books">
      <li *ngFor="let book of bookList" (click)="onSelect(book)" [class.selected]="book === selectedBook">
        <span class="badge">{{book.iSBN}}</span> {{book.originalTitle}} 
      </li>
    </ul>
    <BookDetailComponent [book]="selectedBook"></BookDetailComponent>
`,
    providers: [BookService]
})

export class AppComponent implements OnInit {
    bookList: Book[];
    selectedBook: Book;


    constructor(private bookService: BookService) {

    }

    ngOnInit(): void {
        this.bookService.getBookList().then(books => this.bookList = books);
    }


    onSelect(book: Book): void {
        this.selectedBook = book;
    }
}