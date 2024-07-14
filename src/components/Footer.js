import "./FooterStyles.css"

import React from 'react'
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4>
                       <FaHome size = {20} style = {{color: "#fff", marginRight: "2rem" }}/> 
                       Bay Area, California
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size = {20} style = {{color: "#fff", marginRight: "2rem" }}/>
                        +1 (707) 315 - 0146
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size = {20} style = {{color: "#fff", marginRight: "2rem" }}/>
                        vdionisio22@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <p>Website developed by Vince Dionisio using ReactJS</p>
                <div className="social">
                    <NavLink to = "https://www.linkedin.com/in/vincedionisio/">
                        <FaLinkedin size = {30} style = {{color: "#fff", marginRight: "1rem" }}/>
                    </NavLink>
                    <NavLink to = "https://github.com/vincebreezy">
                        <FaGithub size = {30} style = {{color: "#fff", marginRight: "1rem" }}/>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer