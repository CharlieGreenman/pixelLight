import * as types from "../constants/ActionTypes";

const initialState = {
    xPos: [],
    yPos: [],
    rectColor: []
};

export default function grid(state = initialState, action) {
    switch(action.type) {
    case types.CANVAS_GRID_CLICKED:
      return Object.assign({}, state, {
          xPos: state.xPos.concat(action.xPos),
          yPos: state.yPos.concat(action.yPos),
          rectColor: state.rectColor.concat(action.rectColor)
      });
    case types.CANVAS_FILL_RECT_CLICKED:
      return Object.assign({}, state, {
          xPos: [...state.xPos.slice(0, action.idx),
                 ...state.xPos.slice(action.idx + 1)
          ],
          yPos: [...state.yPos.slice(0, action.idx),
                 ...state.yPos.slice(action.idx + 1)
          ],
          rectColor: [...state.rectColor.slice(0, action.idx),
                      ...state.rectColor.slice(action.idx + 1)
          ]
      });
    default:
        return state;
    }
}
