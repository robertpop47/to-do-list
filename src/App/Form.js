import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(elem) {
    elem.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(elem) {
    setName(elem.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          To-Do-List
        </label>
      </h2>

      <input
        type="text"
        id="new-input"
        className="input input__lg"
        name="text"
        placeholder="Enter a new task"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
