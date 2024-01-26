import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold">Hello Vite + React + Tailwind + G4!</h1>
      <div className="card">
        <button className='bg-red-500 rounded-lg py-3 px-5' onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
      </div>
    </>
  )
}

export default App
