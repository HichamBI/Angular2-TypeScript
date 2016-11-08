import { Component, OnInit, Output, EventEmitter, Input, style } from '@angular/core';
import { Book } from '../shared/book.model';
import { Router } from "@angular/router";

@Component({
    selector: 'sg-book-list-component',
    templateUrl: 'templates/book-list.component.html',
    styleUrls: ['styles/book-list.component.styl']
})

export class BookListComponent {
    @Input() bookList: Book[];
    @Input() selectedBook: Book;

    @Output() onBookSelected = new EventEmitter<Book>();


    constructor(private router: Router) {

    }

    onSelect(book: Book): void {
        this.onBookSelected.emit(book);
    }

    displayDetail(): void {
        this.router.navigate(['/book-detail', this.selectedBook.iSBN]);
    }
}
