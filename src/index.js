import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";

const DATA = [
  { id: "task0", name: "some task...1", completed: true },
  { id: "task1", name: "some task...2", completed: false },
  { id: "task2", name: "some task...3", completed: false },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
