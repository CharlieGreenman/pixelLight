import {combineReducers} from "redux";
import environment from "../reducers/environment";
import settings from "../reducers/settings";
import colorPicker from "../reducers/colorPicker";
import grid from "../reducers/grid";

const rootReducer = combineReducers({
    environment,
    settings,
    colorPicker,
    grid
});

export default rootReducer;
