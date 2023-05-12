import './Createbook.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBook, getBooks } from '../redux/books/bookSlice';

const Form = () => {
  const categories = [
    'science-fiction',
    'horror',
    'action',
    'romance',

  ];

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBooks();
  }, [dispatch]);

  const [formValues, setformValues] = useState({
    title: '',
    author: '',
    categores: '',
    item_id: '',
  });

  const onInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (formValues.title.trim().length <= 0 || formValues.author.trim().length <= 0) {
      return;
    }

    setIsLoading(true);
    dispatch(postBook({
      ...formValues,
      item_id: uuidv4(),
    })).then(() => {
      setIsLoading(false);
      setformValues({
        title: '',
        author: '',
        item_id: '',
        category: '',
      });
      dispatch(getBooks());
    }).catch(() => {
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="bookForm">
        <h2 className="formTitle">ADD NEW BOOK</h2>

        <form className="createBook" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="book title"
            value={formValues.title}
            name="title"
            onChange={onInputChange}
          />

          <input
            type="text"
            placeholder="add author"
            value={formValues.author}
            name="author"
            onChange={onInputChange}
            className="author-input"
          />

          <select
            name="category"
            placeholder="Choose one..."
            value={formValues.category}
            onChange={onInputChange}
          >
            <option value="">Choose Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button className="btn-submit" type="submit">
            <span className="ADD-BOOK Text-Style">ADD BOOK</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
