import React from "react";
import style from "./todo.module.css";
import PropTypes from "prop-types";

const Todo = (props) => {
  const { title, desc, id } = props.todo;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <article className="todo">
      <div className={style.todo}>
        <h3 className="todo__title">{title}</h3>
        <p>{desc}</p>
      </div>

      <div>
        <button className={style.btn}>
          <i
            className="fa fa-trash fa-2x"
            onClick={() => {
              handleClick(id);
            }}
          ></i>
        </button>
      </div>
    </article>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
};
export default Todo;
