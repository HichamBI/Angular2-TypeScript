import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from "@angular/core";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Book } from "../shared/book.model";
import { BookService } from "../shared/book.service";

@Component({
    selector: 'sg-create-book-component',
    templateUrl: 'templates/create-book.component.html',
    encapsulation: ViewEncapsulation.None
})

export class CreateBookComponent implements OnInit {
    book: Book;
    @Input() bookList: Book[];

    @ViewChild('modal')
    modal: ModalComponent;

    constructor(private bookService: BookService) {
    }

    //noinspection JSUnusedGlobalSymbols
    ngOnInit() {
        this.book = new Book(null, '', '', null);
    }

    createBook(book: Book, isValid: boolean): void {
        if (isValid) {
            this.bookService.createBook(book).then(() => this.bookList.push(book));
        }
    }
}
