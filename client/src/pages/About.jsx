import React from 'react'
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
            <h6> Software developer </h6>
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
          <p className='shortDesc'>Hello! My name is George and I am a recent computer science graduate.
            I have always been interested in coding and enjoy spending my free time
            coming up with innovative solutions for problems, making small video games, and cooking.
            I taught Javascript and C# to kids in Calgary and i'm very interested in computer networking and software development.
            I am also a Cisco Certified Network Associate.
          </p>

          <div className='shortFacts'>
            <p><b>Favourite stack</b>: FERN</p>
            <p><b>Favourite snack</b>: M&Ms</p>
            <p><b>Location</b>: Calgary, Alberta</p>
            <p><b>Language preference</b>: Java</p>
          </div>


        </div>

      </div>
    </>
  )
}

export default About