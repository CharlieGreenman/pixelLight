import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function CurrView(view, color){
  if(view === "js"){
    return{
      type: types.CODE_BOX_JS_VIEW,
      view: view,
      color: color
    }
  }
  else if(view === "sass"){
    return{
      type: types.CODE_BOX_SASS_VIEW,
      view: view,
      color: color
    }
  }
  else if(view === "less"){
    return{
      type: types.CODE_BOX_LESS_VIEW,
      view: view,
      color: color
    }
  }
  else{
    return{
      type: types.CODE_BOX_CSS_VIEW,
      view: view,
      color: color      
    }
  }
}
