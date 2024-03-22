import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  bio: "",
  info: "",
  skills: [],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAboutInfo(state, action) {
      state._id = action.payload._id;
      state.info = action.payload.info;
      state.bio = action.payload.bio;
      state.skills = action.payload.skills;
    },
  },
});

export const { setAboutInfo } = aboutSlice.actions;

export default aboutSlice.reducer;
