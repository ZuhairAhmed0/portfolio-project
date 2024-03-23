import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  bio: "",
  info: "",
  skills: [],
  email: "",
  password: "",
  accessToken: "",
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
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const { setAboutInfo, setAccessToken } = aboutSlice.actions;

export default aboutSlice.reducer;
