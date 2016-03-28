import * as types from "../constants/ActionTypes";

const settings = {
    rowCount: 20,
    columnCount: 20,
    pixelCount: 20
};

export default function formSettings(state = settings, action) {
  switch(action.type) {
  case types.COLUMN_COUNT:
      return Object.assign({}, state, {
          columnCount: action.columnCount
      });
  case types.ROW_COUNT:
      return Object.assign({}, state, {
          rowCount: action.rowCount
      });
  case types.PIXEL_COUNT:
      return Object.assign({}, state, {
          pixelCount: action.pixelCount
      });
  default:
      return state;
  }
}
