import { Component, Input } from '@angular/core';
import { Book } from "./shared/book.model.ts";

@Component({
    selector: 'sg-book-detail-component',
    template: `
    <div *ngIf="book">
        <h2>{{book.originalTitle}} details!</h2>
        <div><label>ISBN: </label>{{book.iSBN}}</div>
        <div><label>Author: </label>{{book.author}}</div>
        <div><label>PublicationDate: </label>{{book.publicationDate}}</div>
        <div>
            <label>Original Title: </label>
            <input [(ngModel)]="book.originalTitle" placeholder="Original Title"/>
        </div>
    </div>
`
})

export class BookDetailComponent {
    @Input()
    book: Book;
}