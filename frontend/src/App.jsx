import React from 'react'
import Home from './home/Home'

import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Singnup from './Components/Singnup'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element = {<Courses />} />
      <Route path='/signup' element = {<Singnup />} />



    </Routes>
    
    
    </>
   
  );
}

export default App