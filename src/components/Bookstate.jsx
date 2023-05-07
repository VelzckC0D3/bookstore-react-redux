import React from 'react';
import './Bookstate.css';

const Bookstate = () => (
  <>
    <div className="bookState">
      <div className="book">
        <p className="category">
          <span className="bookSpan">Category:</span>
          {' '}
          Action
        </p>
        <h3 className="title">
          <span className="bookSpan">Title:</span>
          {' '}
          The Hunger Games
        </h3>
        <p className="author">
          <span className="bookSpan">Author:</span>
          {' '}
          Suzanne Collins
        </p>
        <button className="deleteButton" type="button">Delete</button>
      </div>
    </div>
  </>
);

export default Bookstate;
