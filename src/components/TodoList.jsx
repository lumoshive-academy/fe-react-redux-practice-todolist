import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo } from "../redux/async/todos/actions";

const TodoList = () => {
  const { todos, loading, error, isSuccess } = useSelector(
    (state) => state.todo
  );

  const dispatch = useDispatch();

  // get data pertama kali
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // get data ketika isSuccess true
  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTodos());
    }
  }, [isSuccess]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (todos.length === 0) {
    return <div>No todos found.</div>;
  }
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger btn-sm">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
