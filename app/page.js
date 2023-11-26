'use client';
import 'styles/styles.css';
import { useState } from 'react';

let counter = 0;

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const userInput = document.getElementById("addInput").value;

    const data = {id: counter, name: userInput};
    counter = counter + 1;
    
    setTasks([...tasks, data])
    // OR
    // let newArray = [...tasks] OR let newArray = tasks.map((x) => x);
    // newArray.push(userInput)
    // setTasks(newArray)


    // To clear the input field after button clicked
    document.getElementById("addInput").value = "";
  }

  return (
    <main className="flex min-h-screen flex-col">
      <h1>TODO LIST</h1>
      <div id="addTask">
        <input id="addInput" type="text" placeholder="Add a new to do..." />
        <button id="addButton" onClick={addTask}>Add</button>
      </div>
      <div id="todoList">
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
}

function Task({ value, tasks, setTasks }) {
  function removeTask() {
    let arr = tasks.filter(function(task) {
      return task.id != value.id;
    })
    setTasks(arr)
    console.log(arr)
  }

  return (
    <li>
      <label>
        <button className="checkbox" id={value.id} onClick={removeTask}></button>
        <span className="task">{value.name}</span>
      </label>
    </li>
  );
}

function TodoList({ tasks, setTasks }) {
  return (
    <ul id="list">
      {tasks.map((task, index) => (
        <Task key={index} value={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
}