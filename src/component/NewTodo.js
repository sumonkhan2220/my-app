import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  // for handling todo state changes
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  // submit the form and send newTodo in App.js
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      ...todo,
    };
    props.handleAddTodo(newTodo);

    // for reset todo state
    setTodo({
      title: "",
      desc: "",
    });
    // console.log(todos);
  };

  return (
    <div className="container">
      <h1 className="title">Collect Data from a Form</h1>
      <div className="card">
        <form action="" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="desc">Description: </label>
            <textarea
              name="desc"
              id="desc"
              value={desc}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="field-group">
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewTodo.propTypes = {
  onHandleAddTodo: PropTypes.func,
};
export default NewTodo;
