import React, { useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const View = () => {
  var navigate=useNavigate()
  

  var[user,setuser]=useState([])
    axios.get("http://localhost:3004/view")
  .then((res)=>{
    console.log(user)
    setuser(res.data)
    
  })
const Handledelete=(id)=>{
  console.log(id)
  axios.delete("http://localhost:3004/delete/"+id)
  .then((res)=>{
    alert(res.data)
  })}



 
  return (
    <div>
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>  
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">age</TableCell>
              <TableCell align="right">depat</TableCell>
              <TableCell align="right">mark</TableCell> 
            
          
            </TableRow>
        </TableHead>
        <TableBody>
          {user.map((val)=>{
          return(
            <TableRow>
                <TableCell align='right'>{val.Name}</TableCell>
                <TableCell align="right">{val.Age}</TableCell>
                <TableCell align="right">{val.Department}</TableCell>
                <TableCell align="right">{val.Mark}</TableCell>
                <Button variant="contained" onClick={()=>{Handledelete(val._id)}}>Delete</Button>
                <Button variant="contained" onClick={()=>{HandleUpdate(val)}}>Update</Button>
            </TableRow> 
 )
        })}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default View