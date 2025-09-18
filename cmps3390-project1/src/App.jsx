import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from './Home';
import NewView from './NewView';

function App() {

  return (
    <>
    <h1>Testing Out</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/newview'>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/newview' element={<NewView />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
