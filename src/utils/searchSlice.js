import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchView: false,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showSearchView = !state.showSearchView;
    },
  },
});

export default searchSlice.reducer;
export const { toggleSearchView } = searchSlice.actions;
