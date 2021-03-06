import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function GridClicked(xPos, yPos, pixelHex){
    return{
        type: types.CANVAS_GRID_CLICKED,
        xPos: xPos,
        yPos: yPos,
        rectColor: pixelHex,
        rectData: [[xPos, yPos, pixelHex]]
    }
}

export function FillRectClicked(idx){
    return{
        type: types.CANVAS_FILL_RECT_CLICKED,
        idx: idx
    }
}
