import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function GridClicked(xPos, yPos){
    return{
        type: types.CANVAS_GRID_CLICKED,
        xPosition: xPos,
        yPosition: yPos,
    }
}
