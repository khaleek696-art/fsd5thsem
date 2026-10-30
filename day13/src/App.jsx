import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState(" ");
  const [todoList, setTodoList] = useState([]);
  const addHandler = () => {
    if (task === " ") {
      alert("enter a task");
    } else {
      setTodoList([...todoList, task]);
      setTask("");
    }


  }
  return (
    <div>
      <h1>To Do List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={addHandler}>Add</button>
      <br />
      {todoList.map((d, index) =>
        <div>
          <span>  {d}</span>
          <button> Edit </button>
          <button>Delete</button>

        </div>
      )}
    </div>
  )
}

export default App

