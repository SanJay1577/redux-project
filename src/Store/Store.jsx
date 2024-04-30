import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Reducers/TaskSlice";
import queryReducer from "../Reducers/QuerySlice";

//const production = false;
const dev_qa = true;

const rootReducer = combineReducers({
  task: taskReducer,
  query: queryReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: dev_qa,
});

export default store;
