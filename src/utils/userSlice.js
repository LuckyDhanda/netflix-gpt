import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, // Initially, no user is logged in
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload; // OR
      //   state.user = action.payload;
    },
    removeUser: (state) => {
      return null; // OR
      //   state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
