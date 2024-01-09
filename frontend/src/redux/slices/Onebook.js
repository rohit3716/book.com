import { createSlice } from "@reduxjs/toolkit";

const initialState={
    oneBook: null,
    editBook:null,
    loading: false,
};

export const oneBookSlice = createSlice({
    name: "oneBook",
    initialState: initialState,
    reducers: {
      setOneBook: (state, action) => {
        state.oneBook = action.payload;
        // console.log(action.payload);
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setEditBook: (state, action) => {
        state.editBook = action.payload;
        // console.log("editBook", action.payload)
      },
    },
  });
  

export const {setOneBook, setLoading, setEditBook}=oneBookSlice.actions;
export default oneBookSlice.reducer;