import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './AppComponent';
import {BookDetailComponent} from "./BookDetailComponent";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, BookDetailComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}