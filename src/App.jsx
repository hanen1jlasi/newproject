import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar'
 import { BrowserRouter , Route, Routes } from 'react-router-dom'
import About from './component/About'
import Fullpages from './component/fullpages'
import Profile from './component/Profile'
import Client from './component/Client'
import Clientt from './component/clientt'
import Modification from './component/modification'
function App() {
 
    
  return (

    <div className="App">
 

   <BrowserRouter>
   <Routes>
   <Route  path='/' element={<Fullpages/>}/>
   <Route  path='Client2' element={<Clientt/>}/>
    <Route path='/profile/:id' element={<Profile/>}/>
    <Route path='/modification/:id' element={<Modification/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
