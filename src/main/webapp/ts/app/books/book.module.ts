import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common'
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { BookDetailComponent } from "./components/book-detail.component";
import { BookListComponent } from "./components/book-list.component";
import { BookService } from "./shared/book.service";
import { BooksComponent } from "./components/books.component";
import { CreateBookComponent } from "./components/create-book.component";

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, Ng2Bs3ModalModule ],
    declarations: [BookListComponent, BookDetailComponent, BooksComponent, CreateBookComponent],
    exports: [BooksComponent, BookDetailComponent, CreateBookComponent],
    providers: [BookService]
})

export class BookModule {
}