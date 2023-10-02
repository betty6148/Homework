import React, { useState } from "react";

const Control = () => {
  const [task, setTask] = useState();
  const task_onchange = (event) => {
    setTask(event.target.value);
  };
  return (
    <>
      <p>My Task</p>
      <input type="task" id="task" value={task} onChange={task}></input>
      <button>ok</button>
    </>
  );
};

export default Control;
