import "./ProjectCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="img"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="proj-details">
            <p className="tech-stack">{props.heading1}</p>
            <p className="skills-components">{props.heading2}</p>
            <p>{props.text}</p>
            <div className="proj-btns">
                <NavLink to ={props.view} 
                className="btn">View</NavLink>
                <NavLink to ={props.source} 
                className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard