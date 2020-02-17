import React, { createContext, useState } from 'react';
import BookList from '../components/BookList';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
    ]);

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;