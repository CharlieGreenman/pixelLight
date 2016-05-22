import * as types from "../constants/ActionTypes";

const initialState = {
    xPos: [],
    yPos: []
};

export default function grid(state = initialState, action) {
    switch(action.type) {
    case types.CANVAS_GRID_CLICKED:
      return Object.assign({}, state, {
          xPos: state.xPos.concat(action.xPos),
          yPos: state.yPos.concat(action.yPos)
      });
    default:
        return state;
    }
}
