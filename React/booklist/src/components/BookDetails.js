import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book, param }) => {
    const { removeBook } = useContext(BookContext);
    console.log('Param:' + param);

    return (
        <ListGroupItem onClick={()=>{ removeBook(book.id)}}>
            <div className="title">{book.title}</div>
            <small className="author">{book.author}</small>
        </ListGroupItem>
    )
}

export default BookDetails;