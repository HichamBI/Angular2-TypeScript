package com.hbo.dao;

import com.hbo.model.Book;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.*;
import java.util.List;

@Repository
public class BookDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Book> getBookList() {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Book> bookQuery = criteriaBuilder.createQuery(Book.class);
        Root<Book> root = bookQuery.from(Book.class);
        bookQuery.select(root);

        return entityManager.createQuery(bookQuery).getResultList();
    }

    public void createBook(Book book) {
        entityManager.persist(book);
    }

    public void updateBook(Book book) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaUpdate<Book> criteriaUpdate = criteriaBuilder.createCriteriaUpdate(Book.class);
        Root<Book> bookRoot = criteriaUpdate.from(Book.class);
        Path<Book> path = bookRoot.get("iSBN");
        Predicate predicate = criteriaBuilder.equal(path, book.getiSBN());

        criteriaUpdate.where(predicate);
        criteriaUpdate.set("originalTitle", book.getOriginalTitle());

        Query query = entityManager.createQuery(criteriaUpdate);
        query.executeUpdate();
    }

    public void deleteBook(Integer iSBN) {
        Book bookToRemove = entityManager.getReference(Book.class, iSBN);
        entityManager.remove(bookToRemove);
    }
}
