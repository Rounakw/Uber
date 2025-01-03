import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import { userDataContext } from './context/UserContext'

function App() {
    const ans = useContext(userDataContext)
    console.log(ans);
    
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signup' element={<UserSignup />} />
            <Route path='/captain-login' element={<CaptainLogin />} />
            <Route path='/captain-signup' element={<CaptainSignup />} />
        </Routes>
    )
}

export default App
 