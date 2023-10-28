import React, { useEffect, useState } from 'react'
import { apiEndpoints, httpMethods } from '../constants/constant';
import apiconnection from '../apiconnection';
import { getSession } from '../utils/sessionMethods';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import AddCourse from './AddCourse';
import { useNavigate, Link } from 'react-router-dom';
import Loader from './Loader';

export default function Dashboard() {

   const [courses,setCourses] = useState([]);

   const [isLoading,setIsLoading] = useState(false);

   const navigate = useNavigate();

   const [modalShow, setModalShow] = useState(false);

   const getCourses = async () => {
    setIsLoading(true)
    const data = await apiconnection(`${apiEndpoints.GET_COURSES_ENDPOINT}/${getSession('userid')}`,httpMethods.GET)
    setIsLoading(false)
    if(data.data.status === 200) {
        console.log(data)
        setCourses([...data.data.data])
    } else {
        console.log(data)
    }
   }
   
   useEffect(()=>{getCourses()},[modalShow])

  return (
    isLoading?
    <Loader />
    :
    <div className='w-100 p-3'>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Course
        </Button>
        <Row xs={1} md={2} className="mt-4">
        {courses.map((item, idx) => (
            <Card className='w-25 m-2 p-0'>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Card.Footer className='bg-white'>
                    <Button className='w-100 mb-2' variant="primary" onClick={() => navigate(`/courseVideos/${item._id}`)}>Add Video</Button>
                    <Button className='w-100' variant="warning" onClick={() => navigate(`/editCourse/${item._id}`)}>Edit Course</Button>
                </Card.Footer>
                </Card.Body>
            </Card>
        ))}
        </Row>
        <AddCourse
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </div>
  )
}
