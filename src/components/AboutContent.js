import "./AboutContentStyles.css"
import me2 from "../assets/me2.jpg"
import me3 from "../assets/me3.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>Hello, my name is Vince Dionisio. I am a recent graduate from San Jose State University with a degree in Computer Engineering. 
                My academic journey provided valuable experience in both hardware and software development. 
                I am proficient in C, C++, Python, and full-stack development, integrating front-end and 
                back-end technologies. Additionally, I have hands-on skills in PCB design/assembly, hardware 
                testing, digital design, and embedded systems. I am passionate about continuous learning and 
                eager to embrace new challenges in software development, hardware engineering, and quality assurance. 
                My diverse skill set and adaptability make me a versatile candidate ready to contribute to innovative solutions.
                </p>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="image-stack top">
                    <img src = {me2}
                    className="img"
                    alt = "true"/>
                </div>
                <div className="image-stack bottom">
                    <img src = {me3}
                    className="img"
                    alt = "true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent