import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Book } from "../shared/book.model";
import { Router } from "@angular/router";
import { BookService } from "../shared/book.service";

@Component({
    selector: 'sg-book-list-component',
    templateUrl: 'templates/book-list.component.html',
    styleUrls: ['styles/book-list.component.styl']
})

export class BookListComponent {
    @Input() bookList: Book[];
    @Input() selectedBook: Book;

    @Output() onBookSelected = new EventEmitter<Book>();

    constructor(private router: Router, private bookService: BookService) {

    }

    onSelect(book: Book): void {
        this.onBookSelected.emit(book);
    }

    onDelete(book: Book): void {
        this.removeBookFromList(book);
        this.bookService.deleteBook(book.iSBN);
    }

    displayDetail(): void {
        this.router.navigate(['/book-detail', this.selectedBook.iSBN]);
    }

    private removeBookFromList(book: Book): void {
        var bookIndex = this.bookList.indexOf(book, 0);
        if (bookIndex > -1) {
            this.bookList.splice(bookIndex, 1);
        }
    }
}
