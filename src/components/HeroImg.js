import "./HeroImgStyles.css"

import React from 'react'
import IntroImage from "../assets/me1.jpg"

import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className = "hero">
        <div className="mask">
            <img className="intro-img" 
            src={IntroImage} alt = "IntroImage"/>
        </div>
        <div className="content">
            <p>Hello! I'm Vince Dionisio!</p>
            <h1>BS Computer Engineering</h1>
            <div>
                <Link to = "/projects"
                className="btn">Projects</Link>
                <Link to = "/contact"
                className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg