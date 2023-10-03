import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { IShortCut } from "../../../../interfaces/interfaces";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const initialState: IShortCut = {
  id: 0,
  title: "Just talk",
  icon: faPenToSquare,
  chatParams: {
    model: "gpt-3.5-turbo",
    category: "note",
    context: "",
  },
};

export const shortcutStateSlice = createSlice({
  name: "shortcutState",
  initialState,
  reducers: {
    setShortcutState: (state, action) => {
      return { ...initialState, ...action.payload };
    },
    updateChatParam: (
      state,
      action: PayloadAction<{
        paramKey: keyof typeof initialState.chatParams;
        value: string;
      }>
    ) => {
      state.chatParams[action.payload.paramKey] = action.payload.value;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { setShortcutState, reset, updateChatParam } =
  shortcutStateSlice.actions;

export const selectShortcutState = (state: IShortCut) => state;
// export const selectEngineStatus = state => state.carState.engineOn;
// export const selectNavigationStatus = state => state.carState.navigationOn;

// export const selectMemoCarState = createSelector(selectCarState, carState => {
//   return carState;
// });

export default shortcutStateSlice.reducer;
