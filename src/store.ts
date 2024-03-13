import { configureStore } from "@reduxjs/toolkit";
import shortcutStateSlice from "./domains/shortcuts/features/reducers/shortcutStateSlice";
import shortcutListStateSlice from "./features/reducers/shortcutListStateSlice";

const store = configureStore({
  reducer: { shortcutState: shortcutStateSlice, shortcutListState: shortcutListStateSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
