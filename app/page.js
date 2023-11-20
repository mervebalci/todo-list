'use client';
import 'styles/styles.css';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([])

  function buttonClicked() {
    const userInput = document.getElementById("addInput").value
    
    setTasks([...tasks, userInput])
    // OR
    // let newArray = [...tasks] OR let newArray = tasks.map((x) => x);
    // newArray.push(userInput)
    // setTasks(newArray)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <h1>TODO LIST</h1>
      <div id="addItem">
        <input id="addInput" type="text" placeholder="Add a new to do..." />
        <button id="addButton" onClick={buttonClicked}>Add</button>
      </div>
      <div id="todoList">
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}

function Task({ value }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span> {value}</span>
      </label>
    </li>
  );
}

function TodoList({ tasks }) {
  return (
    <ul id="list">
      {tasks.map((task, index) => (
        <Task key={index} value={task} />
      ))}
    </ul>
  );
}