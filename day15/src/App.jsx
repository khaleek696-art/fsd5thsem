import React, { useState } from 'react'
const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addHandler = () => {
    if (task === "") {
      alert("Please enter some task");
    }
    else {
      const updatedList = [...todoList, task];
      setTodoList(updatedList);
      console.log(task);
      console.log(updatedList);
      setTask("");
    }
  }
  const deleteHandler = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}>
      </input>
      <button onClick={addHandler} >ADD</button>
      <br></br>
      {todoList.map((d, index) => <div key={index}>
        <span>{d}</span>
        <button>EDIT</button>
        <button onClick={() => deleteHandler(index)}>DELETE</button>
      </div>)}
    </div>

  )
}
export default App