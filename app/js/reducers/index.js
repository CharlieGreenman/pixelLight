import {combineReducers} from "redux";
import environment from "../reducers/environment";
import settings from "../reducers/settings";
import colorPicker from "../reducers/colorPicker";
import grid from "../reducers/grid";
import codeBox from "../reducers/codeBox"

const rootReducer = combineReducers({
    environment,
    settings,
    colorPicker,
    grid,
    codeBox
});

export default rootReducer;
