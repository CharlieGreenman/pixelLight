import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

export function BackgroundColor(color){
    return{
        type: types.BACKGROUND_COLOR,
        backgroundHex: color
    }
}

export function BackgroundColorRGB(r,g,b){
    return{
        type: types.BACKGROUND_RGB_COLOR,
        backgroundRed: r,
        backgroundGreen: g,
        backgroundBlue: b
    }
}

export function PixelColor(color){
    return{
        type: types.PIXEL_COLOR,
        pixelColor: color
    }
}

export function PixelColorRGB(r,g,b){
    return{
        type: types.PIXEL_RGB_COLOR,
        red: r,
        green: g,
        blue: b
    }
}
