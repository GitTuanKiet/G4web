import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
<<<<<<< HEAD
import 'styles/App.css'
=======
// import './App.css'
>>>>>>> ea2c9d389570b42a7e53402c7bed3c55048993e9

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button className='bg-blue-500 rounded-lg py-3 px-5'>click</button>
      </div>
     
    </>
  )
}

export default App
