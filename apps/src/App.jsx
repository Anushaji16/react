import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { NavBar } from './components/NavBar'
import { Route,  Routes } from 'react-router-dom'
import Data from './components/Data'
import Statebasics from './components/Statebasics'
import Counting from './components/Counting'
import Name from './components/Name'
import Cardget from './components/Cardget'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <NavBar/>
    <Routes>
      
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/data' element={<Data/>}/>
    <Route path='/statebasics' element={<Statebasics/>}/>
    <Route path='/counting' element={<Counting/>}/>
    <Route path='/a' element={<Name/>}/>
    <Route path='/Cardget' element={<Cardget/>}/>
    
    </Routes>
      
    
    </>
  )
}

export default App

