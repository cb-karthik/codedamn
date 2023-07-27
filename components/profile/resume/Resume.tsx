import React from 'react'
import AboutMe from './AboutMe'
import WorkExperience from './WorkExperience'
import Education from './Education'
import TechSkills from './TechSkills'
import Intrests from './Intrests'
import Languages from './Languages'

function Resume() {
  return (
    <div>
    <AboutMe/>
    <WorkExperience/>
    <Education/>
    <TechSkills/>
    <Intrests/>
    <Languages/>
    </div>
  )
}

export default Resume