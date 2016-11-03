import {Injectable} from '@angular/core';
import {Book} from "./book.model";
import {BOOKS} from "./mock-books";

@Injectable()
export class BookService {

    getBookList(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }
}