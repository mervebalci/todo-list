import 'styles/styles.css'

export function TodoList({ value }) {
  return (
    <ul>
      <li id="item" className="font-mono">
        <label>
          <input type="checkbox" />
          <span>{value}</span>
        </label>
      </li>
    </ul>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1>TODO LIST</h1>
      <div id="addItem">
        <input id="addInput" type="text" placeholder="Add a new to do..." />
        <input id="addButton" type="button" value="Add" />
      </div>
      <div id="todoList">
        <TodoList value=" Cook dinner" />
        <TodoList value=" Feed the cats" />
        <TodoList value=" Water the plants" />
      </div>
    </main>
  )
}