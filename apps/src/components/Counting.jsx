import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counting = () => {
    var[num,setnum]=useState(0)
    var[a,seta]=useState()
  return (
    <div>
      <h1>counting{num}</h1>
      <Button variant='outlined' onClick={()=> setnum(num+1)}>increment</Button>
      <Button variant='contained' onClick={()=>setnum(num-1)}>decrement</Button>  
    </div>
  )
}

export default Counting