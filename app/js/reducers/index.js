import {combineReducers} from "redux";
import InitGrid from "../reducers/init-grid";
import environment from "../reducers/environment";

const rootReducer = combineReducers({
    environment,
    InitGrid
});

export default rootReducer;
