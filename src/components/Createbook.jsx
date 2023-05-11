import React, { useState } from 'react';
import './Createbook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Createbook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: Math.random().toString(36).substr(2, 9),
      title,
      author,
      category: 'Fiction', // or whatever category you want to assign by default
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="bookForm">
        <h3 className="formTitle">ADD NEW BOOK</h3>
        <form className="createBook" onSubmit={handleSubmit}>
          <input
            placeholder="Book Title"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <br />

          <input
            placeholder="Book Author"
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <br />
          <br />

          <input type="submit" value="Add Book" />
        </form>
      </div>
    </>
  );
};

export default Createbook;
