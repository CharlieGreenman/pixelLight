import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function CurrView(view){
  if(view === "js"){
    return{
      type: types.CODE_BOX_JS_VIEW,
      view: view
    }
  }
  else if(view === "sass"){
    return{
      type: types.CODE_BOX_SASS_VIEW,
      view: view
    }
  }
  else if(view === "less"){
    return{
      type: types.CODE_BOX_LESS_VIEW,
      view: view
    }
  }
  else{
    return{
      type: types.CODE_BOX_CSS_VIEW,
      view: view
    }
  }
}
