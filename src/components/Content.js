import React from "react";
import TodoList from "./TodoList";
import ContentFooter from "./ContentFooter";
import Footer from "./Footer";

function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList />
        <ContentFooter />
      </section>
      <Footer />
    </>
  );
}

export default Content;
