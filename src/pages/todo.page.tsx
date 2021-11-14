import React, { FunctionComponent } from "react";
import LayoutComponent from "../components/layout/layout.component";
import TodoHOC from "../hoc/todos.hoc";

const TodoPage: FunctionComponent = () => {
  document.title = "ToDo App";
  return (
    <LayoutComponent>
      <h1>Welcome To TODO APP</h1>
      <TodoHOC />
    </LayoutComponent>
  );
};

export default TodoPage;
