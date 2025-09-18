import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

function Contact() {

  return (
    <>
      <p>Hello World!</p>
      <p>My Name is Chazz Carrizales.</p>
      <p>Contact me at 555-555-5555.</p>
      <Link to={'/'}><button>OK</button></Link>
    </>
  )
}

export default Contact
