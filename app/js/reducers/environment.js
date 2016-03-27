import * as types from "../constants/ActionTypes";

const initialState = {
    init:         false
};

export default function environment(state = initialState, action) {
  switch(action.type) {
  case types.INIT_APP:
      return Object.assign({}, state, {
          init: true
      });
  default:
      return state;
  }
}
