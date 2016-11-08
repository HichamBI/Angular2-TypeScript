import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common'
import { FormsModule }   from '@angular/forms';

import { BookDetailComponent } from "./components/book-detail.component";
import { BookListComponent } from "./components/book-list.component";
import { BookService } from "./shared/book.service";
import { BooksComponent } from "./components/books.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [BookListComponent, BookDetailComponent, BooksComponent],
    exports: [BooksComponent, BookDetailComponent],
    providers: [BookService]
})

export class BookModule {
}