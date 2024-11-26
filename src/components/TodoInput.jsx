// src/components/TodoInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/async/todos/actions";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), text, completed: false }));
    setText("");
  }

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
