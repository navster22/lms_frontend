import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react'
import apiconnection from '../apiconnection';
import { apiEndpoints, httpMethods } from '../constants/constant';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    name: '',
    email:'',
    password: '',
    type: ''
  })
  
  const getData = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const registerUser = async (e) => {
    console.log('reached')
    e.preventDefault();
    const data = await apiconnection(apiEndpoints.REGISTER_ENDPOINT,httpMethods.POST,formData)
    console.log(data)
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='m-3 border border-dark w-25 p-5 rounded rounded-3'>
      <Form>
        <h3>Sign Up</h3>
        <Form.Group className='mb-3' as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={formData.name} name="name" required type="text" placeholder="Enter name" onChange={(e)=>getData(e)}/>
        </Form.Group>

        <Form.Group className='mb-3' as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={formData.email} name="email" required type="email" placeholder="Enter email" onChange={(e)=>getData(e)}/>
        </Form.Group>

        <Form.Group className='mb-3' as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={formData.password} name="password" required type="password" placeholder="Enter password" onChange={(e)=>getData(e)}/>
        </Form.Group>

        <Form.Group className='mb-3' as={Col} controlId="formGridType">
          <Form.Label>Type</Form.Label>
          <Form.Select className='mb-3' aria-label="Select type" name="type" onChange={(e)=>getData(e)}>
              <option>Select your account type</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
          </Form.Select>
        </Form.Group>

        <Button className='mb-3 w-100 rounded rounded-3' variant="primary" type="submit" onClick={(e)=>registerUser(e)}>
            Sign Up
        </Button>
        <hr></hr>
        </Form>
        <Button className='mt-3 w-100 rounded rounded-3' variant="primary" type="submit" onClick={()=>navigate('/login')}>
            Log In
        </Button>
      </div>
    </div>
  )
}
