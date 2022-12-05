import React from "react";
import { useTodoContext } from "../context/TodoContexts";

function ContentFooter() {
  const { getNumberOfTodoItems, changeActiveFilter, activeFilter, clearAll } =
    useTodoContext();

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{getNumberOfTodoItems()} - </strong>
        item{getNumberOfTodoItems() > 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => changeActiveFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => changeActiveFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => changeActiveFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearAll}>
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
