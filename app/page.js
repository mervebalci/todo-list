import 'styles/styles.css'

export function TodoList({ value }) {
  return (
    <ul id="todoList">
      <li className="font-mono text-2xl">
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
      <h1 className="">TODO LIST</h1>
      <div id="addItem">
        <input id="addInput" type="text" placeholder="Add a new to do..." className="border p-3" />
        <input id="addButton" type="button" value="Add" className="border ml-6 pl-4 pr-4 pt-3 pb-3 dark:border-neutral-400" />
      </div>      
      <TodoList value=" Cook dinner" />
      <TodoList value=" Feed the cats" />
      <TodoList value=" Water the plants" />
    </main>
  )
}