/*
  Created by Hicham B.I. on 02/10/16.
*/
package resources;

import model.Book;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("book")
public class BookResource {

    @RequestMapping("/all")
    public List<Book> getAllBooks() {
        return Arrays.asList(
                new Book(439023483, "The Hunger Games", "Suzanne Collins", LocalDate.of(2008, Month.SEPTEMBER, 14)),
                new Book(439358078, "Harry Potter and the Order of the Phoenix", " J.K. Rowling", LocalDate.of(2004, Month.AUGUST, 10)),
                new Book(61120081, "To Kill a Mockingbird", "Harper Lee", LocalDate.of(2006, Month.MAY, 23)),
                new Book(679783261, "Pride and Prejudice", "Jane Austen", LocalDate.of(2000, Month.OCTOBER, 10)),
                new Book(66238501, "The Chronicles of Narnia", " C.S. Lewis", LocalDate.of(2002, Month.SEPTEMBER, 16))
        );
    }
}