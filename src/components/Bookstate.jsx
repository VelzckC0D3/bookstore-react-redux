import './Bookstate.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { getBooks } from '../redux/books/bookSlice';

const Books = () => {
  const { books, isLoading } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>; // add a loading indicator
  }

  const keys = Object.keys(books);
  const bookData = keys.map((key) => {
    const bookInfo = books[key][0];
    return {
      key,
      author: bookInfo.author,
      title: bookInfo.title,
      category: bookInfo.category,
    };
  });

  const handleRemoveBook = (book) => {
    axios
      .delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ztKBxmFsSTSNQspsISdU/books/${book.key}`,
      )
      .then(() => {
        dispatch(getBooks()); // Re-fetch the books from the API after a book is removed
      });
  };

  return (
    <>
      <ul className="booksUl">
        {bookData.map((book) => (
          <li className="book" key={book.key}>
            <p className="category">{book.category}</p>
            <h2 className="title">{book.title}</h2>
            <h3 className="author">{book.author}</h3>
            <button type="button" onClick={() => handleRemoveBook(book)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
