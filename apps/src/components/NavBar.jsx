import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>NavBar
        <AppBar>
        <Toolbar>
            <Typography>
          App
          
            
        </Typography>
        <Link to="/Login">
        <Button variant='contained' color='secondary'>Login</Button>
        </Link>
        <Link to="/Signup">
        <Button variant='contained' color='secondary'>Signup</Button>
        </Link>
        <Link to="/Data">
        <Button variant='contained' color='secondary'>Table</Button>
        </Link>
        <Link to="/Statebasics">
        <Button variant='contained' color='secondary'>State</Button>
        </Link>

        <Link to="/Counting">
        <Button variant='contained' color='secondary'>Count</Button>
        </Link>

        <Link to="/a">
        <Button variant='contained' color='secondary'>Name</Button>
        </Link>

        <Link to="/Cardget">
        <Button variant='contained' color='secondary'>Card</Button>
</Link>

        </Toolbar>   
        </AppBar>
        
        
    </div>
        
  )
}
export default NavBar