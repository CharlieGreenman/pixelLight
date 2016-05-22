import * as types from "../constants/ActionTypes";

const initialState = {
    xPos: 0,
    yPos: 0
};

export default function grid(state = initialState, action) {
    switch(action.type) {
    case types.CANVAS_GRID_CLICKED:
      return Object.assign({}, state, {
          xPos: action.xPos,
          yPos: action.yPos
      });
    default:
        return state;
    }
}
