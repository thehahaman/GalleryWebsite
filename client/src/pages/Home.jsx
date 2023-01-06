import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="nav"> <Navbar/></div>
     
      <div className="home">
        <div className="homeContainer">
          <img className='backgroundImage' src='images/background.png' alt='background'/>
          <div className="welcome">

            <div className='homeLogo'>
              <h3>George Projects</h3>

            </div>

            <div className='descriptionContainer'>

              <h1 className='descriptions'>A website to showcase my skills and creations</h1>
            </div>

          </div>

          <div className="content">
            <h1 className='desc'>Welcome to George's projects!!</h1>

            <span className='desc'>made in React.js, express and an SQL database</span>

            <div className='feat'><h2>Featured Project</h2> </div>

            <div className="featured">
              <div className="imageContainer">
                <img className='image' src='images/featured.jpg' alt='Automatic wet cat food feeder'/>
              </div>

              <div className="featuredDescContainer">
                <div className="featuredTitle">
                  <h1 className='featTitle'>
                    Automatic wet cat food feeder
                  </h1>
                </div>

                <div className="featuredDesc">
                  <p className='featDesc'>
                    A wet cat food feeder, which opens each can of wet cat food at specific times during the day
                    <br></br><br></br>
                    The food and the cans are dispensed using gravity, they land in the little claw holder supported by the white platform.
                    The can is then opened by a modified battery operated "one touch" can opener secured in place with screws.
                    when the can is opened up, the white platform moves out of the way and the claw rotates and dispenses the food onto the plate bellow.
                    The plate then goes to the cat and the can is disposed of.
                    <br></br><br></br>
                    This is the latest project that I am working on. Next step is to wire all the hardware together and control the logic from an esp32.
                  </p>
                </div>

              </div>



            </div>

            <div className="projectsButtonContainer">
              <Link className='projectsButton' to='/photos'> All Projects</Link>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home