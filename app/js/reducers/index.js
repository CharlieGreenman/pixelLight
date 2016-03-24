import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import environment from "../reducers/environment";

const rootReducer = combineReducers({
    environment,
    formReducer
});

export default rootReducer;
