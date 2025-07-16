import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blogs/>}/>
      </Routes>
    </div>
  )
}

export default App