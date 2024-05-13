import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function HeroSection() {
    return (
        <header className="hero">
            <div className="wrapper">
                <div className="content">
                    <div className="flex-center">
                        <span className="font-style">{`<Full Stack Developer/>`}</span>
                        <h1 className="title">Hello, I'm Edgar Rojas</h1>
                    </div>
                    <p className="description">Seasoned in full-stack development, specializing in delivering comprehensive web solutions from concept to deployment. Utilizing cutting-edge technologies to create scalable, robust, and visually appealing applications. Expertise ensures seamless integration of front-end and back-end systems, tailored to meet unique project requirements. Ready to elevate digital presence? Let’s partner to transform ideas into exceptional digital experiences.</p>
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
