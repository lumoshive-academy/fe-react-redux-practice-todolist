const todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a To-Do List", completed: false },
  { id: 3, text: "Celebrate", completed: false },
];
console.log(todos);
const filteredTodos = todos.filter((todo) => todo.id !== 1);
console.log(filteredTodos);
