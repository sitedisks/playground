import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ListGroup>
                {books.map(book => {
                    return (

                        <BookDetails book={book} param="OnlyOne" key={book.id} />
                    )
                })}
            </ListGroup>

        </div>
    ) : (
            <div>No books to read. Hello free time : )</div>
        )
}

export default BookList;