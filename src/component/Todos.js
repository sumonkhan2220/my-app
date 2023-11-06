import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = (props) => {
  //   console.log(props.todos);
  const { todos } = props;
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onRemoveTodo={props.onRemoveTodo} />
      ))}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
};

export default Todos;
