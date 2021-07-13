import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  menuBattonCliked,
  checkBoxCliked,
  hoverOnBox,
  howWeDoIsVible,
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

const visibleHowWeDo = createReducer(false, {
  [howWeDoIsVible]: (state, { payload }) => payload,
});

const isHover = createReducer(false, {
  [hoverOnBox]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [menuBattonCliked]: () => true,
});
const error = createReducer(null, {});

const mainReduser = combineReducers({
  visibleHowWeDo,
  isHover,
  isOpenMenu,
  homeOrOffise,
  error,
  loading,
});

export { mainReduser };
