import {combineReducers} from "redux";
import environment from "../reducers/environment";
import settings from "../reducers/settings";
import toggleView from "../reducers/toggleView";
import colorPicker from "../reducers/colorPicker";
import grid from "../reducers/grid";
import codeBox from "../reducers/codeBox";

const appReducer = combineReducers({
    environment,
    settings,
    toggleView,
    colorPicker,
    grid,
    codeBox
});

const rootReducer = (state,action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return appReducer(state,action);
};

export default rootReducer;
