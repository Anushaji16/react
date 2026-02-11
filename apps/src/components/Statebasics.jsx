
import { Button, TextField } from '@mui/material' 
   import React,{useState} from 'react'

   const Statebasics = () => {
    var[name,setname]=useState("Anu")
     var[a,seta]=useState()

    const inputHandler =(e)=>{
         console.log(e.target.value)
         setname(e.target.value)
    }

  const submitHandler =()=>{
   seta(name)
  }  
   
  return (
    <div>
        <h1>Welcome{a}
        </h1>
        <TextField variant='outlined' onChange={inputHandler}/>
        <Button variant='contained' onClick={submitHandler}>add</Button>
    </div>
   
  )
}

export default Statebasics
