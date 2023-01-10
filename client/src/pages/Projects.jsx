import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import './Projects.css'
import db from '../db.js';
import "../components/Navbar.css"

function Projects() {
    const [sortBy, setSortBy] = useState("Featured");
    const [sortDirection, setSortDirection] = useState("desc");

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const projectList = [];

        function populateProjects() {

            const q = query(collection(db, 'Projects'), orderBy(sortBy, sortDirection));

            onSnapshot(q, (projects) => {
                projects.docs.forEach((project) => {
                    projectList.push({ ...project.data(), id: project.id });
                });
                setProjectList(projectList);
            })
        }
        populateProjects();
    }, [sortBy, sortDirection])

    const handleChange = (select) => {
        setSortBy(select.target.value.split(":")[0]);
        setSortDirection(select.target.value.split(":")[1]);
    }

    return (
        <div className="projects">
            <Navbar />
            <div className="content">
                <div className="sortBy">
                    <label for="SortBy">Sort By: </label>
                    <select onChange={handleChange} >
                        <option value="Featured:desc">Featured</option>
                        <option value="Date:desc">Latest Project</option>
                        <option value="Date:asc">Earliest Project</option>
                        <option value="Name:asc">A - Z</option>
                        <option value="Name:desc">Z - A</option>
                    </select>
                </div>

                {projectList.map((project) => {
                    return (
                        <div className="project">
                            <img src={`/images/${project.Picture}`} alt={project.Picture} />

                            <div className="titleDate">
                                <h4>{project.Name}</h4>
                                <h6>Created: {project.Date.toDate().toDateString()}</h6>
                                <p>{project.Description}</p>

                            </div>


                        </div>
                    );

                })}

            </div>
        </div>
    )
}

export default Projects;