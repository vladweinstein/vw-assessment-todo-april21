import { ADD_TODO } from "../constants/action-types";
const initialState = { todo: [] };

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todo: state.todo.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
