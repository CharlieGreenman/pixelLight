import * as types from '../constants/ActionTypes';
//initial state for grid input value
let nextGridId = 0;

export function initApp(init) {
  return {
    type: types.INIT_GRID,
    init
  };
}
