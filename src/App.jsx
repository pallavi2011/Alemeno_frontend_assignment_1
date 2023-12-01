import './App.css'
import CourseDetails from './components/CourseDetails/CourseDetails'
import CourseListing from './components/CourseListing/CourseListing'
import Navbar from './components/Navbar/Navbar'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        
        <Routes>
          <Route exact path='/' element={<CourseListing/>}/>
          </Routes>
            <Routes>
            <Route exact path='/dashboard' element={<StudentDashboard/>}/>
            </Routes>
            <Routes>
            <Route path="/details/:id" element={<CourseDetails />} />
            </Routes>
         
        
        
       
      </div>
      </Router>
     
  )
}

export default App