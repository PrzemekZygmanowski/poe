import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../../interfaces/interfaces";

const initialState: Chat = {
  id: 1,
  title: "Does drinking coffee make you smarter?",
  date: "5h ago",
  commentCount: 5,
  shareCount: 2,
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    switchModel(state, action: PayloadAction<Chat>) {
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchModel } = modelSlice.actions;

export default modelSlice.reducer;
