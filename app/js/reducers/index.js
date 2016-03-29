import {combineReducers} from "redux";
import environment from "../reducers/environment";
<<<<<<< HEAD
import formSettings from "../reducers/form-settings";

const rootReducer = combineReducers({
    environment,
    formSettings
=======
import settings from "../reducers/settings";

const rootReducer = combineReducers({
    environment,
    settings
>>>>>>> refactor
});

export default rootReducer;
