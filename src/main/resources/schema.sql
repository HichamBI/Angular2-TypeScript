create table if not exists BOOK (
  ISBN integer PRIMARY KEY,
  ORIGINAL_TITLE varchar(256) NOT NULL,
  AUTHOR varchar(256) NOT NULL,
  PUBLICATION_DATE DATE NOT NULL,
);