import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./features/reducers/modelSlice";
import shortcutStateSlice from "./domains/shortcuts/features/reducers/shortcutStateSlice";

const store = configureStore({
  reducer: { model: modelReducer, shortcutState: shortcutStateSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
