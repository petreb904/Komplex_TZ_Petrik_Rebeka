import { useState } from 'react'
import './App.css'
import {Navbar} from'./Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './oldalak/Home';
import Header from './components/Header';
import Fooldal from './Fooldal';



function App() {
  

  return (
    <>
    <div className='App'>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Fooldal' element={<Fooldal/>}/>
    </Routes>

    </div>
      
    </>
  )
};




export default App

 