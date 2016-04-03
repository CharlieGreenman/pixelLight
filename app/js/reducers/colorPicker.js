import * as types from "../constants/ActionTypes";

const colors = {
    background: "#191919",
    pixel: "#000000"
};

export default function colorPicker(state = colors, action) {
  switch(action.type) {
  case types.BACKGROUND_COLOR:
      return Object.assign({}, state, {
          background: action
      });
  case types.PIXEL_COLOR:
      return Object.assign({}, state, {
          pixel: action
      });
  default:
      return state;
  }
}
