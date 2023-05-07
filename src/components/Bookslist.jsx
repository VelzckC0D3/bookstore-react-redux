import React from 'react';
import Bookstate from './Bookstate';
import './Bookslist.css';

const Bookslist = () => (
  <>
    <ul className="booksUl">
      <li className="booksLi"><Bookstate /></li>
    </ul>
  </>
);

export default Bookslist;
