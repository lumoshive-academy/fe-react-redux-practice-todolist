export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

// action creator
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });