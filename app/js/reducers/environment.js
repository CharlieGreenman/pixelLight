import * as types from "../constants/ActionTypes";

const initialState = {
    init: false
};

export default function environment(state = initialState, action) {
  switch(action.type) {
  case types.INIT_APP:
      return Object.assign({}, state, {
          init: true
      });
  default:
      return state;
  }
}

// export default function environment(state = initialState, action) {
//    switch(action.type) {
//       case types.HIDE:
//       case types.SHOW:
//           return Object.assign({}, state, {
//               show: action.show
//           });
//       default:
//           return state;
//     }
//  }
