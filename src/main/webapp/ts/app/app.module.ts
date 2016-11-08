import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { BookModule } from "./books/book.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    imports: [DashboardModule, BookModule, BrowserModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}