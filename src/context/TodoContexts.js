import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = [];

const initialActiveList = "all";

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);
  const [activeFilter, setActiveFilter] = useState(initialActiveList);

  const getNumberOfTodoItems = () =>
    todoList.filter((todo) => !todo.completed).length;

  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const destroy = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  const completedTodo = (id) => {
    const newTodos = [...todoList];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodoList(newTodos);
  };

  const changeActiveFilter = (active) => {
    setActiveFilter(active);
  };

  const clearAll = () => {
    const activeTodos = todoList.filter((todo) => todo.completed === false);
    setTodoList(activeTodos);
  };

  const contextValue = {
    todoList,
    getNumberOfTodoItems,
    addTodo,
    destroy,
    setTodoList,
    completedTodo,
    activeFilter,
    changeActiveFilter,
    clearAll,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
