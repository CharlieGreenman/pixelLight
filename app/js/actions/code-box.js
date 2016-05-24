import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function CurrView(view){
  return{
    type: types.CODE_BOX_VIEW_CHANGED,
    view: view
  }
}
