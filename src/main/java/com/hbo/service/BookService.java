package com.hbo.service;

import java.util.List;

import com.hbo.dao.BookDAO;
import com.hbo.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class BookService {

    @Autowired
    BookDAO bookDAO;

    @Transactional(readOnly = true)
    public List<Book> getBookList() {
        return bookDAO.getBookList();
    }

    @Transactional
    public void updateBook(Book book) {
        bookDAO.updateBook(book);
    }

    @Transactional
    public void createBook(Book book) {
        bookDAO.createBook(book);
    }

    @Transactional
    public void deleteBook(Integer iSBN) {
        bookDAO.deleteBook(iSBN);
    }
}
