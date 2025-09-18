import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      
      <Link to={'/contact'}><button>Hello</button></Link>
    </>
  )
}

export default Home
