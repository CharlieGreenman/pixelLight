import {combineReducers} from "redux";
import environment from "../reducers/environment";
import settings from "../reducers/settings";

const rootReducer = combineReducers({
    environment,
    settings
});

export default rootReducer;
