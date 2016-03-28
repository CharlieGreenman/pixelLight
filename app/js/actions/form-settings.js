import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function columnCount(count) {
  return {
      type: types.COLUMN_COUNT,
      columnCount: count
  };
}

export function rowCount(count) {
  return {
      type: types.ROW_COUNT,
      rowCount: count
  };
}

export function pixelCount(count) {
  return {
      type: types.PIXEL_COUNT,
      pixelCount: count
  };
}
