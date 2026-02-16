import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Add from './component/Add'
import View from './component/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/> 
      <Routes>
        <Route path="/add"element={<Add/>}/>
        <Route path="/"element={<View/>}/>
      </Routes>

    </>
  )
}

export default App
