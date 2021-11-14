import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import AddTodoForm from "../components/add-todo/add-todo-form.component";
import CardComponent from "../components/card/card.component";
import Todo from "../components/todo/todo";
import { ITodo } from "../models/todo.interface";
import { addTodo } from "../store/actions/rootAction";
interface TodoHOCProps {
  todos: ITodo[];
}

const TodoHOC: FunctionComponent<TodoHOCProps> = ({ children, todos }) => {

  return (
    <div>
      {todos?.length ? (
        todos.map((todo) => {
          return (
            <CardComponent key={todo.id}>
              <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                title={todo.title}
                deadLine={todo.deadLine}
                priority={todo.priority}
                status={todo.status}
              />
            </CardComponent>
          );
        })
      ) : (
        <div>No ToDo Added Yet , Pease Add Some!</div>
      )}
      <AddTodoForm  />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { todos: state.todoReducer.todos };
};

export default connect(mapStateToProps, { addTodo })(TodoHOC);
