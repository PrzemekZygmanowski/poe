import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./features/reducers/modelSlice";

export default configureStore({
  reducer: { model: modelReducer },
});
