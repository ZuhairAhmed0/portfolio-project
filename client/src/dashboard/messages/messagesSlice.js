import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  messages: [],
};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export const getMessages = (state) => state.messages.messages;

export default messagesSlice.reducer;
