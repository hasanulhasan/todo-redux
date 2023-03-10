import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./ationTypes";
import initialState from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]
    case TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      });
    case COLORSELECTED:
      const { doId, color } = action.payload;
      return state.map(todo => {
        if (todo.id !== doId) {
          return todo;
        }
        return {
          ...todo,
          color: color
        }
      })
    case DELETED:
      return state.filter(todo => todo.id !== action.payload);
    case ALLCOMPLETED:
      console.log('all completed clicked')
      return state.map(todo => {
        return {
          ...todo,
          completed: true
        }
      })
    case CLEARCOMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state
  }
}

export default todoReducer