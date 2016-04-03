import {combineReducers} from "redux";
import environment from "../reducers/environment";
import settings from "../reducers/settings";
import colorPicker from "../reducers/colorPicker";

const rootReducer = combineReducers({
    environment,
    settings,
    colorPicker
});

export default rootReducer;
