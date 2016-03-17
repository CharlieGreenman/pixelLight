import * as types from "../constants/ActionTypes";

const initialState = {
    isMobile: false,
    height: null,
    width: null
};

export default function environment(state = initialState, action) {
  switch(action.type) {
  case types.INIT_APP:
      return Object.assign({}, state, {
          isMobile: action.initGrid
      });
  default:
      return state;
  }

}
