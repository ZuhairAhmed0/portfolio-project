import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import aboutSlice from "./features/about/aboutSlice";
import servicesSlice from "./features/services/servicesSlice";
import projectsSlice from "./features/projects/projectsSlice";
import messagesSlice from "./dashboard/messages/messagesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

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

const rootReducer = combineReducers({
  about: persistReducer({ key: "about", storage }, aboutSlice),
  services: persistReducer({ key: "services", storage }, servicesSlice),
  projects: persistReducer({ key: "projects", storage }, projectsSlice),
  responseMessage: responseMessage.reducer,
  messages: persistReducer({ key: "messages", storage }, messagesSlice),
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
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
export const persistor = persistStore(store);
