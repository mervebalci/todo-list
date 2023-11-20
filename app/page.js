'use client';
import 'styles/styles.css';
import { createRoot } from 'react-dom/client';

export default function Home() {
  function buttonClicked() {
    const userInput = document.getElementById("addInput").value
    
    const newItem = <Task value={userInput} />
  
    const container = document.getElementById('list');
    const root = createRoot(container);
    root.render(newItem)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <h1>TODO LIST</h1>
      <div id="addItem">
        <input id="addInput" type="text" placeholder="Add a new to do..." />
        <button id="addButton" onClick={buttonClicked}>Add</button>
      </div>
      <div id="todoList">
        <TodoList />
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

function TodoList() {
  const tasks = ['do the laundry', 'cook dinner', 'water the plants']

  return (
    <ul id="list">
      {tasks.map((task, index) => (
        <Task key={index} value={task} />
      ))}
    </ul>
  );
}