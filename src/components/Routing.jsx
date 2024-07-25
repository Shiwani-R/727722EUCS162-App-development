import React from 'react'
import {Route, Routes} from 'react-router-dom'
import SignUp from './SignUp'
import Homepage from './Homepage'
import Loginform from './Loginform'

const Routing = () => {
  return (
    <Routes>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/' element={<Loginform/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
  )
}

export default Routing