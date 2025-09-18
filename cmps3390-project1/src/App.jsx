import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from './Home';
import Contact from './Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
