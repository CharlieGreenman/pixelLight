import * as types from "../constants/ActionTypes";

const defaultView = {
  draw: true,
  view: false
}

export default function toggleView(state = defaultView, action) {
  switch(action.type) {
  case types.INIT_VIEW_MODE:
      return Object.assign({}, state, {
          view: action.view,
          draw: action.draw,
      });
  case types.INIT_DRAW_MODE:
      return Object.assign({}, state, {
          draw: action.draw,
          view: action.view
      });
  case types.TOGGLE_GRID_VIEW:
      return Object.assign({}, state, {
          draw: !action.draw,
          view: !action.view
      });
  default:
      return state;
  }
}
