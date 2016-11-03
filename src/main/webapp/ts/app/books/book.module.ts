import {NgModule}      from '@angular/core';
import {CommonModule}       from '@angular/common'
import {FormsModule}   from '@angular/forms';

import {BookDetailComponent} from "./book-detail.component";
import {BookListComponent} from "./book-list.component";
import {BookService} from "./shared/book.service";


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [BookListComponent, BookDetailComponent],
    exports: [BookListComponent],
    providers: [BookService]
})

export class BookModule {
}