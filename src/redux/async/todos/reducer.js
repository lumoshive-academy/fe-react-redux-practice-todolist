import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  PROCESS_TODO_SUCCESS,
} from "./actions";

// state
const initialState = {
  todos: [],
  loading: false,
  error: null,
  isSuccess: false,
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isSuccess: false,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PROCESS_TODO_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default todoReducer;
