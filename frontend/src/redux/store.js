import { configureStore } from "@reduxjs/toolkit";
import BooksDataSlice from "./slices/BooksDataSlice";
import UserSlice from "./slices/UserSlice";
import oneBookSlice from "./slices/Onebook";

export const store = configureStore({
  reducer: {
    user:UserSlice,
    booksData: BooksDataSlice,
    oneBook: oneBookSlice
  },
});
export default store;
