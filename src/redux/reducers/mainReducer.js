import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  menuBattonCliked,
  payMethodsSuccess,
  payMethodsError,
} from "../actions/mainAction";

const isOpenMenu = createReducer(false, {
  [menuBattonCliked]: (state, { payload }) => !state,
});

const loading = createReducer(false, {
  [menuBattonCliked]: () => true,
  [payMethodsSuccess]: () => false,
  [payMethodsError]: () => false,
});
const error = createReducer(null, {
  [payMethodsError]: (_, { payload }) => payload,
  [payMethodsSuccess]: () => "",
});

const mainReduser = combineReducers({
  isOpenMenu,
  error,
  loading,
});

export { mainReduser };
