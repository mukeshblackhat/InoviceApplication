import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import App from './App'
import DefaultHome from './landingPages/SignUp'

const RoutesPage = () => {
  return (
    <div>
        <Router>
        <Routes>
            <Route path='/' exact element={<DefaultHome/>}></Route>
            <Route path='/home' element={<App />}></Route>
        </Routes>
        </Router>
    </div>
  )
}

export default RoutesPage