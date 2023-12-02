import React, {useState, useEffect} from 'react'
import './Card.css';
import {Link} from 'react-router-dom';



const Card = ({course, index}) => {
  const [likes, setLikes] = useState(0)
  // useEffect(() => {

  //   const interval = setInterval(() => {
  //       // Poll the server for new data.
  //       fetch("https://localhost:3030/courses")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setLikes(courses.likes);
  //         }
         
         
          
  //       )


  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className='course_card' key={index}>

        <img src={course.thumbnail} alt='course-img' className='course_image'></img>

        <div className='course__content'>
            <h3>{course.name}</h3>
            <p>{course.instructor}</p>
            <p>{course.description}</p>
            <Link to={`/details/${course.id}`} state={{course}} className='btn'>Details...</Link>
            <span className='likes'>likes: {course.likes}</span>
            
           
        </div>
    </div>

  )
}

export default Card