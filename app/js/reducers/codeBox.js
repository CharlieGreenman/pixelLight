import * as types from "../constants/ActionTypes";

const initialState = {
  view: 'css'
}

export default function codeBox(state = initialState, action) {
  switch(action.type) {
  case types.CODE_BOX_JS_VIEW:
    return Object.assign({}, state, {
      js: action.view,
      sass: false,
      less: false,
      css: false
    });
  case types.CODE_BOX_SASS_VIEW:
    return Object.assign({}, state, {
      sass: action.view,
      js: false,
      less: false,
      css: false
    });
  case types.CODE_BOX_LESS_VIEW:
    return Object.assign({}, state, {
      less: action.view,
      js: false,
      less: false,
      css: false
    });
  case types.CODE_BOX_CSS_VIEW:
    return Object.assign({}, state, {
      css: action.view,
      sass: false,
      less: false,
      js: false
    });

  default:
      return state;
  }
}
