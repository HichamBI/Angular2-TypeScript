import { Injectable } from '@angular/core';
import { Book } from "./book.model";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
    private HEADERS = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getBookList(): Promise<Book[]> {
        let allBooksUrl = `http://localhost:8080/book/all`;
        return this.http.get(allBooksUrl)
            .toPromise()
            .then(response => response.json() as Book[])
            .catch(BookService.handleError);
    }

    getBook(iSBN: number): Promise<Book> {
        return this.getBookList().then(books => books.find(book => book.iSBN === iSBN));
    }

    createBook(book: Book) {
        let createBookUrl = `http://localhost:8080/book/create`;
        return this.http.post(createBookUrl, JSON.stringify(book), {headers: this.HEADERS})
            .toPromise()
            .catch(BookService.handleError)
    }

    updateBook(book: Book) {
        let updateBookUrl = `http://localhost:8080/book/update`;
        this.http.put(updateBookUrl, JSON.stringify(book), {headers: this.HEADERS})
            .toPromise()
            .catch(BookService.handleError)
    }

    deleteBook(iSBN: number): void {
        let deleteBookUrl = `http://localhost:8080/book/delete/${iSBN}`;
        this.http.delete(deleteBookUrl)
            .toPromise()
            .catch(BookService.handleError)
    }

    private static handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}