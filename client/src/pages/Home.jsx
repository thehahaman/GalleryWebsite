import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import db from '../db.js';
const colRef = collection(db, 'Projects');
const Home = () => {
  let featuredProject = {};
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const projectList = [];

    function populateProjects() {
      getDocs(colRef).then((projects) => {
        projects.docs.forEach((project) => {
          projectList.push({ ...project.data(), id: project.id });
        });

        setProjectList(projectList);

      }).catch(err => {
        console.log(err.message);
      });
    }
    populateProjects();
  }, [])

  return (
    <>
      <div className="nav"> <Navbar /></div>

      <div className="home">
        <div className="homeContainer">
          <img className='backgroundImage' src='images/background.png' alt='background' />
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

            <span className='desc'>made in React and Firestore, hosted on Firebase</span>

            <div className='feat'><h2>Featured Project</h2> </div>

            {projectList.map((project) => {
              if (project.Featured) {
                featuredProject = project;
                return (
                  <div className="featured">
                    <div className="imageContainer">
                      <img className='image' src={`images/${featuredProject.Picture}`} alt={featuredProject.Picture} />
                    </div>

                    <div className="featuredDescContainer">
                      <div className="featuredTitle">
                        <h1 className='featTitle'>
                          {featuredProject.Name}
                        </h1>
                      </div>

                      <div className="featuredDesc">
                        <p className='featDesc'>
                          {featuredProject.Description}
                        </p>
                      </div>

                    </div>



                  </div>
                );
              }
              return (<></>);
            })
            }




            <div className="projectsButtonContainer">
              <Link className='projectsButton' to='/projects'> All Projects</Link>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home