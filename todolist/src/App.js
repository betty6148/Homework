import "./App.css";
import React, { useState, useEffect } from "react";
import ListDetail from "./components/ListDetail";
//import Control from "./components/Control";
import { nanoid } from "nanoid";
import { clear } from "@testing-library/user-event/dist/clear";

console.log("App");

function App() {
  const [task, setTask] = useState("");
  const task_onchange = (event) => {
    setTask(event.target.value);
  };

  const [listState, setListState] = useState([]);

  const handleDelete = (key) => () => {
    const filteredArray = listState.filter((item) => item.key !== key);

    setListState(filteredArray);
  };
  const handleClick = () => {
    const key = nanoid();
    const listData = {
      key,
      content: task,
    };

    const newListState = [...listState, listData];
    setListState(newListState);
    setTask("");
  };

  return (
    <>
      <h2 className="fs-2 p-2">To-Do LIST</h2>
      <input
        className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
        type="task"
        id="task"
        value={task}
        onChange={task_onchange}
      ></input>
      <button
        type="button"
        className="m-2 btn btn-outline-primary"
        onClick={handleClick}
      >
        ok
      </button>

      {listState.map((item) => (
        <ListDetail
          key={item.key}
          text={item.content}
          delete={handleDelete(item.key)}
        ></ListDetail>
      ))}
    </>
  );
}

export default App;
