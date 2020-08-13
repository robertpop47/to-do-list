import React, { useState } from "react";
import Form from "./Form";
import FilterButton from "./Filter";
import InputElement from "./InputElement";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => id !== task.id);
    setTasks(newTasks);
  }

  const allTasks = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <InputElement
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    ));

  const filteredList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id: "task", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = allTasks.length !== 1 ? "tasks" : "task";
  const headingText = `${allTasks.length} ${tasksNoun}:`;

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <br />
      <div className="filters btn-group stack-exception">{filteredList}</div>
      <h2 id="listHeading" tabIndex="-1">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {allTasks}
      </ul>
    </div>
  );
}

export default App;
