import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailComponent } from "./components/book-detail.component";
import { BooksComponent } from "./components/books.component";
import { CreateBookComponent } from "./components/create-book.component";

const routes: Routes = [
    {path: 'book-detail/:iSBN', component: BookDetailComponent},
    {path: 'create-book', component: CreateBookComponent},
    {path: 'books', component: BooksComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule {
}