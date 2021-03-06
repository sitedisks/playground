import React, { useContext } from 'react';
import { Badge } from 'reactstrap';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div>
            <h1>Ninja Reading List</h1>
            <p>Currently you have <Badge color="primary" pill>{books.length}</Badge> books to get through...</p>
        </div>
    )
}

export default Navbar;