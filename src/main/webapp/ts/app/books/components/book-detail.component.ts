import { Component, Input, OnInit } from '@angular/core';
import { Book } from "../shared/book.model.ts";
import { ActivatedRoute, Params } from "@angular/router";
import { BookService } from "../shared/book.service";
import { Location } from '@angular/common';

@Component({
    selector: 'sg-book-detail-component',
    templateUrl: 'templates/book-detail.component.html',
    styleUrls: ['styles/book-detail.component.less']
})

export class BookDetailComponent implements OnInit {
    @Input()
    book: Book;

    constructor(private route: ActivatedRoute, private location: Location, private bookService: BookService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['iSBN'];
            this.bookService.getBook(id)
                .then(book => this.book = book);
        });
    }

    goBack(): void {
        this.location.back();
    }

    saveBookDetails() : void {
        this.bookService.updateBook(this.book);
    }
}