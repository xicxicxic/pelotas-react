import { configureStore, createStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = createStore(counterReducer);
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
