import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatId: 'OOJuSRa4Q8265wLyJlXp',
    chatName: 'General Chat'
  },
  reducers: {
    setChat: (state, action) => {
      console.log(action)
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
    }
});

export const { setChat } = chatSlice.actions;

export const selectChatName = state => state.chat.chatName;
export const selectChatId = state => state.chat.chatId;

export default chatSlice.reducer;
