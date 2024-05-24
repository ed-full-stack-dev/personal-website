import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function HeroSection() {
    return (
        <header className="hero">
            <div className="wrapper">
                <div className="content">
                    <div className="flex-center">
                        <h1 className="title">Welcome to my portfolio!</h1>
                    </div>
                    <p className="description">As a seasoned web developer specializing in React and full-stack technologies, I deliver tailored web solutions that bridge the gap between stunning aesthetics and functional precision. My expertise lies in crafting scalable applications, from conception through to deployment, ensuring a seamless fusion of front-end flair and robust back-end systems. Are you looking to elevate your digital presence? Let's collaborate and transform your visions into impactful digital realities.</p>
                    <div className="links">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ed-full-stack-dev" className="btn">
                            <FaGithub className="icon" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/edgar-rojas-developer/" className="btn">
                            <FaLinkedinIn className="icon" />
                        </a>
                    </div>
                </div>
                <figure className="image">
                    <StaticImage
                        src="../images/design.avif"
                        alt="Hero image"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="full-width"
                    />
                </figure>
            </div>
        </header>
    )
}

export default HeroSection
