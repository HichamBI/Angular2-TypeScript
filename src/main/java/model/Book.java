/*
 * Created by Hicham B.I. on 02/10/16.
 */
package model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import serializer.BookSerializer;

import java.time.LocalDate;

@JsonSerialize(using = BookSerializer.class)
public class Book {

    private final Integer iSBN;
    private final String originalTitle;
    private final String author;
    private final LocalDate publicationDate;

    public Book(Integer iSBN, String originalTitle, String author, LocalDate publicationDate) {
        this.iSBN = iSBN;
        this.originalTitle = originalTitle;
        this.author = author;
        this.publicationDate = publicationDate;
    }

    public Integer getiSBN() {
        return iSBN;
    }

    public String getOriginalTitle() {
        return originalTitle;
    }

    public String getAuthor() {
        return author;
    }

    public LocalDate getPublicationDate() {
        return publicationDate;
    }
}
