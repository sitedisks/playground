import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book, param }) => {
    const { removeBook } = useContext(BookContext);
    console.log('Param:' + param);

    return (
        <li onClick={()=>{ removeBook(book.id)}}>
            <div className="title">{book.title}</div>
            <small className="author">{book.author}</small>
        </li>
    )
}

export default BookDetails;