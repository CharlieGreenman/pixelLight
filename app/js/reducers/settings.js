import * as types from "../constants/ActionTypes";

const settings = {
    column:  20,
    row:     20,
    pixel:    20
};

export default function environmentSettings(state = settings, action) {
  switch(action.type) {
  case types.COLUMN_COUNT:
      return Object.assign({}, state, {
          column: action
      });
  case types.ROW_COUNT:
      return Object.assign({}, state, {
          row: action
      });
  case types.PIXEL_SIZE:
      return Object.assign({}, state, {
          pixel: action
      });
  default:
      return state;
  }
}
