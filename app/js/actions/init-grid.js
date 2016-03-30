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

//three input fields for form
//columncount
export function ColumnCount(column) {
  return {
      type: types.COLUMN_COUNT,
      count: column
  };
}

//rowcount
export function RowCount(row) {
  return {
      type: types.ROW_COUNT,
      count: row
  };
}

//rowcount
export function PixelSize(pixel) {
  return {
      type: types.PIXEL_SIZE,
      count: pixel
  };
}
