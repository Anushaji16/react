import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Link to="/add">
                <Button variant='containter'>add</Button>
                </Link>

                <Link to="/">
                
                <Button variant='containter'>View</Button></Link>


            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
      
  )
}

export default NavBar

