'use client';
import 'styles/styles.css';
import { createRoot } from 'react-dom/client';

export default function Home() {
  function buttonClicked() {
    const userInput = document.getElementById("addInput").value
    
    const newItem = <TodoItem value={userInput} />
  
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
        <ul id="list">

        </ul>
      </div>
    </main>
  );
}

function TodoItem({ value }) {
  console.log("hey");
  console.log(value);

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span> {value}</span>
      </label>
    </li>
  );
}