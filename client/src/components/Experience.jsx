import React from 'react'
import '../css/experience.css'
import ExperienceCard from './ExperienceCard'
const Experience = () => {
  return (
    <div className='experience'>
        <div className="experiencename">Experience</div>
        <div className="exoeriencehead">My Work <span className='experienacehighlight'>Experience</span></div>
        <div className="experiencecontainer">
          <ExperienceCard/>
          <ExperienceCard/>
        </div>
    </div>
  )
}
export default Experience
