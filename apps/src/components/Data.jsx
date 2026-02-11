import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { data } from 'react-router-dom'

 const Data = () => {
  var[user,setuser]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    console.log(user)
    setuser(res.data)
    
  })
  return (
    <div>Data
    <TableContainer>
        <TableHead>
        
            <TableRow>
               
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">City</TableCell>
            
        </TableRow>
        </TableHead>
        <TableBody>
        {user.map((val)=>{
          return(
            <TableRow>
        <TableCell align='right'>{val.name}</TableCell>
        <TableCell align="right">{val.username}</TableCell>
              <TableCell align="right">{val.email}</TableCell>
              <TableCell align="right">{val.address.city}</TableCell>

            </TableRow> 

          )
        })}
 
        </TableBody>
    </TableContainer>
    </div>
  )
}
export default Data
