import { createSlice } from "@reduxjs/toolkit";

const movieSuggestionsSlice = createSlice({
  name: "movieSuggestions",
  initialState: {
    results: [],
  },
  reducers: {
    setMovieSuggestions: (state, action) => {
      state.results = action.payload;
    },
    clearMovieSuggestions: (state) => {
      state.results = [];
    },
  },
});

export const { setMovieSuggestions, clearMovieSuggestions } =
  movieSuggestionsSlice.actions;

export default movieSuggestionsSlice.reducer;
