import './Bookstate.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="booksUl">
        {books.map((book) => (
          <li className="book" key={book.item_id}>
            <p className="category">{book.category}</p>
            <h2 className="title">{book.title}</h2>
            <h3 className="author">{book.author}</h3>
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
              Remove
            </button>

          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
