import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CourseListing.css';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCourses } from '../features/courseSlice';
import {BiSearch} from 'react-icons/bi';


const CourseListing = () => {
    const[nameSearch, setNameSearch] = useState('');
    const[instructorSearch, setInstructorSearch] = useState('');
    

    const dispatch = useDispatch();
    const { courses} = useSelector(
      (state) => state.course
    )

    const [searchCourses, setSearchCourses] = useState(courses)

    

    const filter = (keyword) => {
     
      if (keyword !== '') {
        const results = courses.filter((course) => {
          return course.name.toLowerCase().startsWith(keyword.toLowerCase()) ||
                 course.instructor.toLowerCase().startsWith(keyword.toLowerCase()) 
                 
        });
        setSearchCourses(results);
      } else {
        setSearchCourses(courses);
      }
      
    };


    
   
    useEffect(() => {
        
        dispatch(getAllCourses())

        }, [])
    
  return (
    <div className='course-listing'>
        
            <div className='courses__search'>
              <div className='course_search-input'>
                <input placeholder='Search course name...' type="text"  name="nameSearch" onChange={(e) => setNameSearch(e.target.value)} value={nameSearch}/>
                <BiSearch className='search-icon' onClick={(e) => filter(nameSearch)}/>
              </div>
               
              <div className='course_search-input'>
                <input placeholder='Search instructor name...' type="text"  name="instructorSearch" value={instructorSearch} onChange={(e) => setInstructorSearch(e.target.value)}/>
                  <BiSearch className='search-icon' onClick={(e) => filter(instructorSearch)}/> 
              </div>
            </div>
            
        
        <div className='courses__list'>
            {searchCourses.length > 0 ? searchCourses.map((course,index)=> (
            
            <Card course={course} index={index} key={index}/>)):
            courses.map((course,index)=> (
            
              <Card course={course} index={index} key={index}/>))}
            
        </div>
        
       
       
      
        
    </div>
  
  )
}

export default CourseListing