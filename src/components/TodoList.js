import React from "react";
import { useTodoContext } from "../context/TodoContexts";

let filtered = [];
function TodoList() {
  const { todoList, destroy, completedTodo, activeFilter } = useTodoContext();

  filtered = todoList;
  if (activeFilter !== "all") {
    filtered = todoList.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => {
        return (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => completedTodo(todo.id)}
              />
              <label>{todo.title}</label>
              <button
                className="destroy"
                onClick={() => destroy(todo.id)}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
