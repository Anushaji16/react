import { Button } from '@mui/material'
import React, { useState } from 'react'

const Name = () => {
    var[name,setname]=useState("ancy")
    const inp1=() => {
       setname("java")
    }
       const inp2=() =>{ 
         setname("React")
    }
      const inp3=() =>{
        setname("python")
      }

  return (

    <div>
        <h1>Welcome:{name}</h1>
        <Button variant='contained' onClick={inp1}>java</Button>
        <Button variant='contained' onClick={inp2}>react</Button>
        <Button variant='contained' onClick={inp3}>Python</Button>
        </div>

  )
}

export default Name