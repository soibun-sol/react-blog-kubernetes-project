import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to My Deep Dive Into Everything Tech</h1>
      <body>
        welcome to my personal blog. this is where i will be sharing my personal adventure with projects, studying, and homelabbing ups and downs!
      </body>
      <p className="read-the-docs">
        Keegan Hinton, Khinton386@gmail.com, github.com/soibun-sol/
      </p>
    </>
  )
}

export default App
