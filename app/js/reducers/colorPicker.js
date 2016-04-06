import * as types from "../constants/ActionTypes";

const colors = {
    background: "#191919",
    pixel: "#000000",
    backgroundRed: "25",
    backgroundGreen: "25",
    backgroundBlue: "25",
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
          backgroundRed: action.backgroundRed || state.backgroundRed,
          backgroundGreen: action.backgroundGreen || state.backgroundGreen,
          backgroundBlue: action.backgroundBlue || state.backgroundBlue,
      });
  case types.PIXEL_RGB_COLOR:
      return Object.assign({}, state, {
          pixelRed: action.red || state.red,
          pixelGreen: action.green || state.green,
          pixelBlue: action.blue || state.blue,
      });
  default:
      return state;
  }
}
