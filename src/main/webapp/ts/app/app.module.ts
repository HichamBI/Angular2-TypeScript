import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { BookModule } from "./books/book.module";

@NgModule({
    imports: [BookModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}