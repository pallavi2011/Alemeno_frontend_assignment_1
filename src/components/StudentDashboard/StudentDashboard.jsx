import React, { useEffect, useState} from 'react';
import './StudentDashboard.css';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCourses } from '../features/courseSlice';
import axios from 'axios';



const StudentDashboard = () => {
    
      const dispatch = useDispatch();
      const { courses} = useSelector(
      (state) => state.course
    )

    // const [filled, setFilled] = useState(40)
    const [checked, setChecked] = useState(false)
    
      useEffect(() => {
        dispatch(getAllCourses())

       
      }, [courses])
    
      function calculateDueDate(duration){

            const days = duration.match(/\d+/)[0] * 7
            let dt = new Date();
            dt.setDate(dt.getDate() + days);
            return dt.toLocaleDateString();
      }

      const onChange = (e,id, course)=> {
        e.preventDefault()
        setChecked(!checked);
       
        
        axios.put("http://localhost:3030/courses/"+id, {...course, progress:100})
        .then(res => {
            console.log(res.json())
        }) 
    }
        
            
  
  return (
    <div className='student__dashboard'>   
        
        {courses
        .map((course) => {
            let students = course.students.filter((student) =>
            student.id == 101
            );
            if (!students.length) {
            return null;
            }
            return { ...course, students };
        })
        .filter(Boolean)
        .map((course, index) => (
        <div className='student_course-card' key={index}>
            <img src={course.thumbnail} alt='course-img' className='course_image'></img>
    
            <div className='student_course-content'>
                <h3>{course.name}</h3>
                <p>{course.instructor}</p>
                <span>Due date: {calculateDueDate(course.duration)}</span>
                <div className='progressbar_outer'>
                        <div style={{
                            height:"100%",
                            width:`${course.progress}%`,
                            backgroundColor:"green"
                        }}>
                        <span>{course.progress}%</span>
                        </div>
                    
                </div>
                    {course.progress === 100 ? (<h5>Completed</h5>):(
                    <div>
                    <input type="checkbox" onChange={(e) => onChange(e, course.id,course)}/>
                    <span>*tick to mark as completed</span>
                    </div>
                    
                    )}
               
                
            </div>
            </div>
        )
            
        )}
    
            
        </div>
        
    
   
    
)}

export default StudentDashboard