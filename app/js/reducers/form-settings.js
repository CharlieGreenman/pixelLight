import * as types from "../constants/ActionTypes";

const formSettings = {
    rowCount: 20,
    columnCount: 20,
    pixelCount: 20
};

export default function formSettings(state = formSettings, action) {
  switch(action.type) {
  case types.COLUMN_COUNT:
      return Object.assign({}, state, {
          count: count
      });
  case types.ROW_COUNT:
      return Object.assign({}, state, {
          count: count
      });
  case types.PIXEL_COUNT:
      return Object.assign({}, state, {
          count: count
      });
  default:
      return state;
  }
}
