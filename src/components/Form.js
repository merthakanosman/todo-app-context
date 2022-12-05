import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContexts";
import { nanoid } from "nanoid";

function Form() {
  const { addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!todoItem) {
      return;
    }

    addTodo({ id: nanoid(), title: todoItem, completed: false });
    setTodoItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
    </form>
  );
}

export default Form;
