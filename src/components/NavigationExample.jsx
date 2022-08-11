import React from 'react'
import { Navigate, useNavigate, Route , Routes } from 'react-router-dom'

function NavigationExample() {
    const status=200
    const nav= useNavigate()

    const clickProcess= ()=>{
        console.log('Hello')
        nav('/about')
    }
    if(status===404){

        return <Navigate to='/notfound' />
    }
  return (
    <div>NavigationExample
        <button onClick={clickProcess}>Click here</button>

        <Routes>
            <Route path='/show' element={
            <hi>Hello World</hi>} />
        </Routes>
    </div>
    
  )
}

export default NavigationExample