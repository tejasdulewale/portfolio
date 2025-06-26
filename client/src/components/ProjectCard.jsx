import React from 'react'
import '../css/projectcard.css'
import posterImage from '../assets/poster1.jpg'
const ProjectCard = () => {
  return (
    <div className='projectcard'>
        <div className="image">
            <img src={posterImage} alt="" />
        </div>
        <h2 className="projectname">project name</h2>
        <p className="projectdesc">Lorem ipsum dolor sit.</p>
    </div>
  )
}

export default ProjectCard