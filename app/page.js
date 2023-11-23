'use client';
import 'styles/styles.css';
import { useState } from 'react';

let counter = 0;

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState([]);

  function addTask() {
    const userInput = document.getElementById("addInput").value;

    const data = {index: counter, status: false, name: userInput};
    counter = counter + 1;
    
    setTasks([...tasks, data])
    // OR
    // let newArray = [...tasks] OR let newArray = tasks.map((x) => x);
    // newArray.push(userInput)
    // setTasks(newArray)


    // To clear the input field after button clicked
    document.getElementById("addInput").value = "";
  }

  const selectedCheckbox = (event) => {
    // Keep track of the selected task ids
    // console.log(event.target.checked)
    if (event.target.checked) {
      for (let i = 0; i < tasks.length; i++) {        
        if ((tasks[i].index) == event.target.id) {
          let arr = [...tasks];
          arr[i].status = true;
          setTasks(arr);
        }
      }
    } else {
      for (let i = 0; i < tasks.length; i++) {
        let arr = checked.filter(function(unselectedTask) {
          return unselectedTask != event.target.id
        });
        if ((tasks[i].index) == event.target.id) {
          let arr = [...tasks];
          arr[i].status = false;
          setTasks(arr)
        }
      }
    }
    console.log(tasks)  
  }
  

  function removeTask() {
    Array.prototype.forEach.call(checked, function(checkedTaskIndex) {
      document.getElementById(checkedTaskIndex).closest('label').remove();
    });

    setChecked([]);
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
        <TodoList tasks={tasks} onChangeAction={selectedCheckbox} />
      </div>
    </main>
  );
}

function Task({ value, onChangeAction }) {
  return (
    <li>
      <label>
        <input id={value.index} type="checkbox" className="checkbox" onChange={onChangeAction} />
        <span> {value.name}</span>
      </label>
    </li>
  );
}

function TodoList({ tasks, onChangeAction }) {
  return (
    <ul id="list">
      {tasks.map((task, index) => (
        <Task key={index} value={task} onChangeAction={onChangeAction} />
      ))}
    </ul>
  );
}