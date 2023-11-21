'use client';
import 'styles/styles.css';
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const userInput = document.getElementById("addInput").value
    
    setTasks([...tasks, userInput])
    // OR
    // let newArray = [...tasks] OR let newArray = tasks.map((x) => x);
    // newArray.push(userInput)
    // setTasks(newArray)


    // To clear the input field after button clicked
    document.getElementById("addInput").value = ""
  }

  function removeTask() {
    const checkedBoxes = document.querySelectorAll('.checkbox:checked');
    console.log(checkedBoxes)
    Array.prototype.forEach.call(checkedBoxes, function(checkbox) {
      checkbox.closest('label').remove();
    });
  }

  return (
    <main className="flex min-h-screen flex-col">
      <h1>TODO LIST</h1>
      <div id="addTask">
        <input id="addInput" type="text" placeholder="Add a new to do..." />
        <button id="addButton" onClick={addTask}>Add</button>
        <button id="removeButton" onClick={removeTask}>Remove</button>
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
        <input type="checkbox" className="checkbox" />
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