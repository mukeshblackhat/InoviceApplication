import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import App from './App'
import SignUp from './landingPages/SignUp'
import Requests from './Requests/Requests'
import Login from './landingPages/LoginPage' 

const RoutesPage = () => {
  return (
    <div>
       
        <Routes>
            <Route path='/' exact element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<App/>}></Route>
            <Route path='/requests' element={<Requests/>}></Route>
        </Routes>
      
    </div>
  )
}

export default RoutesPage