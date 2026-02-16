
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var[student,setStudent]=useState({
    Name:"",
    Age:"",
    Department:"",
    Mark:""
  })
  
  var navigate=useNavigate()
  var location=useLocation()
  console.log(location.state)
  
  const HandleInput=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
    console.log(student)
  }
  if(location.state!==null){
    useEffect(()=>{
      setStudent({...student,
        Name:location.state.val.Name,
        Age:location.state.val.Age,
        Department:location.state.val.Department,
        Mark:location.state.val.Mark,
      })
    },[])
  }
  const Adding=()=>{
     console.log()
     if(location.state!==null){
      axios.put("http://localhost:3004/update/"+location.state.val._id,student)
      .then((res)=>{
      alert(res.data)
      navigate("/")
    })
     }
     else{
    axios.post("http://localhost:3004/Add",student) 
    .then((res)=>{
      alert(res.data)
      navigate("/")
    })
  }
}
  return (
    <div>
        <TextField name="Name" variant="outlined" value={student.Name} onChange={HandleInput}/><br /><br />
        <TextField name="Age" variant="outlined" value={student.Age} onChange={HandleInput}/><br /><br />
        <TextField name="Department" variant="outlined" value={student.Department}onChange={HandleInput} /><br /><br />
        <TextField name="Mark" variant="outlined"value={student.Mark} onChange={HandleInput} /><br /><br />
        <Button variant='contained' onClick={Adding}> submit</Button>
    </div>
  )
}

export default Add