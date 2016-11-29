package com.hbo.resource;

import com.hbo.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.hbo.service.BookService;

import java.util.List;


@RestController
@RequestMapping("book")
public class BookResource {

    @Autowired
    private BookService bookService;

    @RequestMapping("/all")
    public List<Book> getAllBooks() {
        return bookService.getBookList();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void createBook(@RequestBody Book book) {
        bookService.createBook(book);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public void updateBook(@RequestBody Book book) {
        bookService.updateBook(book);
    }

    @RequestMapping(value = "/delete/{iSBN}", method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable(value = "iSBN") Integer iSBN) {
        bookService.deleteBook(iSBN);
    }
}
