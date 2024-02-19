import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { IShortCuts } from "../../interfaces/interfaces";
import { shortcuts } from "../../data/models/shortcuts";

const initialState: IShortCuts = shortcuts

export const shortcutStateSlice = createSlice({
    name: "shortcutListState",
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
