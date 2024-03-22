import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export const getProjects = (state) => state.projects.projects;

export default projectsSlice.reducer;
