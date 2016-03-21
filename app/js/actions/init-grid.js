import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";
//initial state for grid input value
let nextGridId = 0;

//singular state for all three applications
//change element so that element can be where it needs to be
export function InitGrid(init) {
  return {
      type: types.INIT_APP,
      init
  };
}
