import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import './about.css'

function About() {
  return (
    <>
      <Navbar />

      <div className='about'>
        <div className="me">
          <div className="profile">
            <img className='profileImage' src='images/hikePhoto.png' alt='profile' />
            <h1> George Abouseta </h1>
          </div>

          <div className="aboutLinks">
            <a href="https://www.linkedin.com/in/george-a-522a7211b/"> <img className='linkPhoto' src='images/linkedIn.png' alt='Linked In' /> </a>
            <a href="https://www.instagram.com/george_abosetta/"><img className='instagramPhoto' src='images/instagramLogo.png' alt='Instagram' /> </a>
          </div>
          <div className="gmail">
            <img className='linkPhoto' src='images/gmailLogo.png' alt='Gmail' /> <span>gabousetta333@gmail.com</span>
          </div>

        </div>

        <div className="aboutme">
          this is an example of about me
        </div>

      </div>
    </>
  )
}

export default About