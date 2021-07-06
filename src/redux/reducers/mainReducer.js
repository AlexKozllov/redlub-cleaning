import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  menuBattonCliked,
  checkBoxCliked,
  hoverOnBox,
} from "../actions/mainAction";

const isOpenMenu = createReducer(false, {
  [menuBattonCliked]: (state, { payload }) => !state,
});
const homeOrOffise = createReducer("home", {
  [checkBoxCliked]: (state, { payload }) => {
    if (state === "home") {
      return "offise";
    }
    if (state === "offise") {
      return "home";
    }
  },
});

const isHover = createReducer(false, {
  [hoverOnBox]: (state, { payload }) => payload,
  // [payMethodsSuccess]: () => false,
  // [payMethodsError]: () => false,
});

const loading = createReducer(false, {
  [menuBattonCliked]: () => true,
  // [payMethodsSuccess]: () => false,
  // [payMethodsError]: () => false,
});
const error = createReducer(null, {
  // [payMethodsError]: (_, { payload }) => payload,
  // [payMethodsSuccess]: () => "",
});

const mainReduser = combineReducers({
  isHover,
  isOpenMenu,
  homeOrOffise,
  error,
  loading,
});

export { mainReduser };
