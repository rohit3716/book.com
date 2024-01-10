import { createSlice } from "@reduxjs/toolkit";

const initialState={
    booksData: null,
    loading: false,
    userBooks:null,
};

export const BooksDataSlice = createSlice({
    name: "booksData",
    initialState: initialState,
    reducers: {
      setBooksData: (state, action) => {
        state.booksData = action.payload;
        // console.log(action.payload);
        // console.log("Book Data Store Ho Gaya")
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
        console.log("loading of books data", state.loading);
      },
      setUserBooks:( state, action ) =>{
        state.userBooks = action.payload;
        // console.log("userBooks ", action.payload);
      },
    },
  });
  

export const {setBooksData, setLoading, setUserBooks}= BooksDataSlice.actions;
export default BooksDataSlice.reducer;