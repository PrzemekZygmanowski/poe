import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShortCuts, IShortCut } from "../../interfaces/interfaces";
// import { shortcuts } from "../../data/models/shortcuts";

const initialState: IShortCuts = []

export const shortcutListStateSlice = createSlice({
    name: "shortcutListState",
    initialState,
    reducers: {

        setShortcutList: (state, action: PayloadAction<IShortCuts>) => {
            return action.payload;
        },
        updateShortcut: (state, action: PayloadAction<{ index: number, shortcut: IShortCut }>) => {
            state[action.payload.index] = action.payload.shortcut;
        },
        reset: () => {
            return initialState;
        },
    },
});

export const { setShortcutList, reset, updateShortcut } =
    shortcutListStateSlice.actions;
// export const selectShortcutListState = (state: { shortcutListState: IShortCuts }) => state.shortcutListState;
export const selectShortcutListState = (state: { shortcutListState: IShortCuts }) => state.shortcutListState;



export default shortcutListStateSlice.reducer;
