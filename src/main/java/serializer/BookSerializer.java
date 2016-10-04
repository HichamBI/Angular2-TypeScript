/*
 * Created by Hicham B.I. on 03/10/16.
 */

package serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import model.Book;

import java.io.IOException;
import java.time.format.DateTimeFormatter;


public class BookSerializer extends JsonSerializer<Book> {

    @Override
    public void serialize(Book book, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField("iSBN", book.getiSBN());
        jsonGenerator.writeStringField("originalTitle", book.getOriginalTitle());
        jsonGenerator.writeStringField("author", book.getAuthor());
        jsonGenerator.writeStringField("publicationDate", book.getPublicationDate().format(DateTimeFormatter.ISO_LOCAL_DATE));
        jsonGenerator.writeEndObject();
    }
}
