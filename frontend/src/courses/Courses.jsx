import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'
import list from "../../public/list.json"

const Courses = () => {
    console.log(list);
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
        <Course />

        </div>
       
        <Footer />
    </div>
  )
}

export default Courses