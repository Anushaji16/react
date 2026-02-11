import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'

const Signup  = () => {
  return (
    <div>
        <h1>Signup page</h1>
        
        <TextField label="email" variant="outlined"/><br/><br/>
        <TextField label="username" variant="outlined"/><br/><br/>


        <TextField id="outlined-basic" label="password" variant="outlined" /><br /><br />
        <Button>Signup</Button>
        
    </div>
  )
  
}

export default Signup