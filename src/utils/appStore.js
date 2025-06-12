import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import searchReducer from "./searchSlice";
import movieSuggestionsReducer from "./movieSuggestionsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    search: searchReducer,
    movieSuggestions: movieSuggestionsReducer,
  },
});

export default appStore;
