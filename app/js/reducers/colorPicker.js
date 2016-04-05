import * as types from "../constants/ActionTypes";

const colors = {
    background: "#191919",
    pixel: "#000000",
    red: "25",
    green: "25",
    blue: "25"
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
  case types.BACKGROUND_RGB_COLOR:
      return Object.assign({}, state, {
          red: action.red,
          green: action.green,
          blue: action.blue,
      });
  default:
      return state;
  }
}
