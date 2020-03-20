import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author);

        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
  
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title">Book Title</Label>
                <Input type="text" name="title" id="title" placeholder="Title"
                    value={title} onChange={(e) => { setTitle(e.target.value) }} required />
            </FormGroup>
            <FormGroup>
                <Label for="author">Book Author</Label>
                <Input type="text" name="author" id="author" placeholder="Author"
                    value={author} onChange={(e) => { setAuthor(e.target.value) }} required />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default NewBookForm;