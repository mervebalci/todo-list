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

  
  function removeTask(id) {
    console.log(id)
    let arr = tasks.filter(function(task) {
      return task.id != id;
    })
    setTasks(arr)
    console.log(arr)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <h1>TODO LIST</h1>
      <div id="addTask">
        <input id="addInput" type="text" placeholder="Add a new to do..." />
        <button id="addButton" onClick={addTask}>Add</button>
      </div>
      <div id="todoList">
        <TodoList tasks={tasks} onClick={removeTask} />
      </div>
    </main>
  );
}

function Task({ value, onClick }) {
  return (
    <li>
      <label>
        <button className="checkbox" id={value.id} onClick={() => onClick(value.id)}></button>
        <span className="task">{value.name}</span>
      </label>
    </li>
  );
}

function TodoList({ tasks, onClick }) {
  return (
    <ul id="list">
      {tasks.map((task, index) => (
        <Task key={index} value={task} onClick={onClick} />
      ))}
    </ul>
  );
}