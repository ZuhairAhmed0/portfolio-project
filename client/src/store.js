import { configureStore, createSlice } from "@reduxjs/toolkit";
import aboutSlice from "./features/about/aboutSlice";
import servicesSlice from "./features/services/servicesSlice";
import projectsSlice from "./features/projects/projectsSlice";
import messagesSlice from "./dashboard/messages/messagesSlice";
const responseMessage = createSlice({
  name: "responseMessage",
  initialState: {
    error: null,
    success: "",
  },
  reducers: {
    setSuccessOrError(state, action) {
      state.success = action.payload.success;
      state.error = action.payload.error;
    },
  },
});
const store = configureStore({
  reducer: {
    about: aboutSlice,
    services: servicesSlice,
    projects: projectsSlice,
    responseMessage: responseMessage.reducer,
    messages: messagesSlice,
  },
});

export function setSuccessOrError(success = "", error = null) {
  return function (dispatch) {
    dispatch({
      type: "responseMessage/setSuccessOrError",
      payload: { success, error },
    });
  };
}
export default store;
