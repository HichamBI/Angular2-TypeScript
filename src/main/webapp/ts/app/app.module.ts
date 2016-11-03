import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component.ts';
import {BookDetailComponent} from "./books/book-detail.component.ts";
import {BookListComponent} from "./books/book-list.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, BookDetailComponent, BookListComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}