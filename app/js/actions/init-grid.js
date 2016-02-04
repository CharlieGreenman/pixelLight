import * as types from "../constants/ActionTypes";
//initial state for grid input value
let nextGridId = 0;

// here we are just defining what it is
// and where things should be
export function initApp(init) {
  return {
    type: types.INIT_APP,
    init
  };
}

// export function initEnvironment() {
//   //trying to fully understand why we would return dispatch in this instance
//     return dispatch => {
//
//       //down here we are defining what should happen to the pure function
//       dispatch(initApp(App));
//     }
// }
