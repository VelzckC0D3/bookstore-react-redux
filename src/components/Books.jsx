import React from 'react';
import Bookslist from './Bookslist';
import Createbook from './Createbook';
import './Books.css';

const Books = () => (
  <div className="mainCont">
    <Bookslist />
    <Createbook />
  </div>
);

export default Books;
