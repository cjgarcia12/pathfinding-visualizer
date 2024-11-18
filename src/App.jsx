import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MazeGrid from "./Components/MazeGrid.jsx";
import './output.css';

function App() {

  return (
      <main className='container'>
        <MazeGrid />
      </main>
  )
}

export default App
