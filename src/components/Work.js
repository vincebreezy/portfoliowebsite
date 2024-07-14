import "./ProjectCardStyles.css"
import ProjectCard from "./ProjectCard"
import WorkCardData from "./WorkCardData"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">My Projects</h1>
        <p className="proj-description">Below are some of the projects I've worked on, including team collaborations, 
          solo endeavors, and school assignments. Some of these projects have been deployed and include links to 
          showcase the extensive work and dedication put into them. While these projects are open to improvement, 
          they were invaluable opportunities for hands-on experience. I thoroughly enjoyed developing them, applying 
          the skills I learned in throughout my journey, and learning new ones along the way.
        </p>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return(
                    <ProjectCard 
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    source = {val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work