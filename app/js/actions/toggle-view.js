import * as types from "../constants/ActionTypes";

export function InitViewMode(){
    return{
        type: types.INIT_VIEW_MODE,
        view: true,
        draw: false
    }
}

export function InitDrawMode(){
    return{
        type: types.INIT_DRAW_MODE,
        draw: true,
        view: false
    }
}

export function ToggleGridView(draw, view){
    return{
        type: types.TOGGLE_GRID_VIEW,
        draw: !draw,
        view: !view
    }
}

export function ResetApp(draw, view){
    return{
        type: types.RESET_APP
    }
}
