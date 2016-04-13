import * as types from "../constants/ActionTypes";

const colors = {
    backgroundHex: "#191919",
    backgroundRed: "25",
    backgroundGreen: "25",
    backgroundBlue: "25",
    pixelHex: "#000000",
    red: "25",
    green: "25",
    blue: "25"
};

export default function colorPicker(state = colors, action) {
  switch(action.type) {
  case types.BACKGROUND_COLOR:
      return Object.assign({}, state, {
          backgroundHex: action.backgroundHex || state.backgroundHex
      });
  case types.PIXEL_COLOR:
      return Object.assign({}, state, {
          pixelHex: action.pixelHex || state.pixelHex
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
