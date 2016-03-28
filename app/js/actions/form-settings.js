import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function columnCount(count) {
  return {
      type: types.COLUMN_COUNT,
      count: count
  };
}

export function rowCount(count) {
  return {
      type: types.ROW_COUNT,
      count: count
  };
}

export function pixelCount(count) {
  return {
      type: types.PIXEL_COUNT,
      count: count
  };
}
