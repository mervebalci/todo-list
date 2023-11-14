export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-48 pb-48">
      <h1 className="font-bold font-mono text-6xl">TODO LIST</h1>
      <div>
        <input type="text" className="text-3xl text-black border p-2" />
        <input type="button" value="Add" className="text-3xl border ml-6 pl-4 pr-4 pt-2 pb-2 dark:border-neutral-400" />
      </div>      
      <ul>
        <li className="font-mono text-2xl">
          <label>
            <input type="checkbox" />
            <span> Cook dinner</span>
          </label>
        </li>
        <li className="font-mono text-2xl">
          <label>
            <input type="checkbox" />
            <span> Feed the cats</span>
          </label>
        </li>
        <li className="font-mono text-2xl">
          <label>
            <input type="checkbox" />
            <span> Water the plants</span>
          </label>
        </li>
      </ul>
    </main>
  )
}