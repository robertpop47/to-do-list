import React from "react";

export default function InputElement(props) {
  const viewTemplate = (
    <div className="stack-small">
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label className="label" htmlFor={props.id}>
        {props.name}
      </label>
      <div style={{ paddingLeft: "20px" }}>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <li className="elementToDo" style={{ paddingBottom: "10px" }}>
      {viewTemplate}
    </li>
  );
}
