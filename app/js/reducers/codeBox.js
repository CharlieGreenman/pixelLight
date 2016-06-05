import * as types from "../constants/ActionTypes";

const initialState = {
  css: 'css',
  sass: false,
  less: false,
  js: false
}

export default function codeBox(state = initialState, action) {
  switch(action.type) {
  case types.CODE_BOX_JS_VIEW:
    return Object.assign({}, state, {
      js: action.view,
      sass: false,
      less: false,
      css: false,
      color: action.color
    });
  case types.CODE_BOX_SASS_VIEW:
    return Object.assign({}, state, {
      sass: action.view,
      js: false,
      less: false,
      css: false,
      color: action.color
    });
  case types.CODE_BOX_LESS_VIEW:
    return Object.assign({}, state, {
      less: action.view,
      js: false,
      sass: false,
      css: false,
      color: action.color
    });
  case types.CODE_BOX_CSS_VIEW:
    return Object.assign({}, state, {
      css: action.view,
      sass: false,
      less: false,
      js: false,
      color: action.color
    });

  default:
      return state;
  }
}
