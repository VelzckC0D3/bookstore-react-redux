import React from 'react';
import './Createbook.css';

const Createbook = () => (
  <>
    <div className="bookForm">
      <h3 className="formTitle">ADD NEW BOOK</h3>
      <form className="createBook">
        <input placeholder="Book Title" type="text" id="title" name="title" />
        <br />
        <br />

        <input placeholder="Book Author" type="text" id="author" name="author" />
        <br />
        <br />

        <input type="submit" value="Add Book" />
      </form>
    </div>
  </>
);

export default Createbook;
