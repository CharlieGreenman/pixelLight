import * as types from "../constants/ActionTypes";

const initialState = {
  view: 'css'
}

export default function codeBox(state = initialState, action) {
  switch(action.type) {
  case types.CANVAS_GRID_CLICKED:
    return Object.assign({}, state, {
      view: action.view
    });
  default:
      return state;
  }
}
