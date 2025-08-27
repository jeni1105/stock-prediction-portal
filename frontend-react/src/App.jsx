import { useState } from 'react'
import './assets/CSS/style.css'
import Main from './components/Main.jsx'  
import Register from './components/register.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import Dasboard from './components/dashboard/Dasboard.jsx'
import PrivateRoute from './PrivateRoute.jsx' 
import PublicRoute from './PublicRoute.jsx'
function App() {
  
  return (
    <>
    <AuthProvider>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
    <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
    <Route path='/dashboard' element={<PrivateRoute><Dasboard /></PrivateRoute>} />
    </Routes>
    <Footer />
   </BrowserRouter>
   </AuthProvider>

    </>
  )
}

export default App
