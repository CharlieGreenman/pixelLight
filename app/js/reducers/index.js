import {combineReducers} from "redux";
import environment from "../reducers/environment";
import formSettings from "../reducers/form-settings";

const rootReducer = combineReducers({
    environment,
    formSettings
});

export default rootReducer;
