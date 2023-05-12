import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ztKBxmFsSTSNQspsISdU/books';

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('book/postBook', async (bookData) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: bookData,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  books: [],
  isLoading: false,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
