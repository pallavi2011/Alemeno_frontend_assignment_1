import React, {useState, useEffect} from 'react'
import './CourseDetails.css';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
    const [expand, setExpand] = useState(null)

    const { state } = useLocation(); // <-- access route state

    const { course } = state || {}; // <-- unpack the item from state
    
    const {thumbnail, instructor, duration, prerequisites,enrollmentStatus, location, schedule, syllabus } = course;
 
    const toggle = (i) => {
        if(expand == i){
            return setExpand(null)
        }

        setExpand(i)
    }
    
    const pre = prerequisites.split(",");
  

    
  return (
    <div className='course__details'>
        <div className='course__details-image'>
            <img src={thumbnail}/>
        </div>
        <div className='course__content'>
                <span>Created By<span>{instructor}</span> </span>    
                <p>Enrollment Status: {enrollmentStatus}</p>
                <span>Schedule : {schedule}</span>
                <span>Location: {location}</span>
                <h3>Pre-requisites</h3>
                {pre.map((item, index) => (
                    <li key={index}>{item.replace(/[\[\]']+/g,'')}</li>
                ))}
                    
        <div className='wrapper'>
            <div className="accordion">
            {syllabus.map((item, index) => (
                <div className='item' key={index}>
                    
                         <div className='title' onClick={() => toggle(item.week)}>

                         <h2>Week: {item.week}</h2>
                         <span>{expand == item.week ? '-' : '+'}</span>
                     </div>
                     
                       { expand == item.week ? (
                         <div className="detail">
                        <p>Topic: {item.topic}</p>
                         <p>content: {item.content}</p>
     
                     </div>
                     ):null}
                         
                 </div>
                    ))}
                   
               
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default CourseDetails