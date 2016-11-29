import { Component, OnInit, Input } from "@angular/core";
import { BookService } from "../../books/shared/book.service";
import { Book } from "../../books/shared/book.model";

@Component({
    selector: 'sg-dashboard',
    templateUrl: 'templates/dashboard.component.html',
    styleUrls: ['styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @Input()
    bookList: Book[] = [];

    constructor(private bookService: BookService) {
    }

    ngOnInit(): void {
        this.bookService.getBookList().then(books => this.bookList = books.slice(0, 3));
    }
}