import React from 'react';
import './Books.css';
import Bookslist from './Bookslist';
import Createbook from './Createbook';

const Books = () => (
  <>
    <h2 className="booksTitle">Books</h2>
    <Bookslist />
    <Createbook />
  </>
);

export default Books;
