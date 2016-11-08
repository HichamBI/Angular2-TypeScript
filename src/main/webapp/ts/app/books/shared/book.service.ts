import { Injectable } from '@angular/core';
import { Book } from "./book.model";
import { BOOKS } from "./mock-books";

@Injectable()
export class BookService {

    getBookList(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }

    getBookListSlowly(): Promise<Book[]> {
        return new Promise<Book[]>(resolve =>
            setTimeout(resolve, 2000))
            .then(() => this.getBookList());
    }

    getBook(iSBN: number): Promise<Book> {
        return this.getBookList().then(books => books.find(book => book.iSBN === iSBN));
    }
}