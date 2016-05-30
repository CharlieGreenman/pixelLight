import * as types from "../constants/ActionTypes";

export function InitViewMode(view, draw){
    return{
        type: types.INIT_VIEW_MODE,
        view: view,
        draw: draw
    }
}

export function InitDrawMode(draw, view){
    return{
        type: types.INIT_DRAW_MODE,
        draw: draw,
        view: view
    }
}

export function ToggleGridView(draw, view){
    return{
        type: types.TOGGLE_GRID_VIEW,
        draw: draw,
        view: view
    }
}

export function ResetApp(draw, view){
    return{
        type: types.RESET_APP
    }
}
