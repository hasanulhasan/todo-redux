import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

const initialState = {
  status: 'All',
  colors: []
}
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload
      }
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case 'added':
          return {
            ...state,
            colors: [
              ...state.colors,
              color
            ]
          }
        case 'remove':
          return {
            ...state,
            colors: state.colors.filter(existingColor => existingColor !== color)
          }
        default:
          return state
      }
    default:
      return state
  }
}
export default filterReducer