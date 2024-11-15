import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MazeGrid from "./Components/MazeGrid.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
        <MazeGrid />
      </main>
  )
}

export default App
