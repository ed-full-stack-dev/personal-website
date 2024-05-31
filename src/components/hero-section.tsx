import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function HeroSection() {
    return (
        <header className="hero">
            <div className="wrapper">
                <div className="content">
                    <div className="flex-center">
                        <h1 className="title">Welcome to Web Dev Node.</h1>
                    </div>
                    <p className="description">Hey there! Welcome to Web Dev Node, your go-to space for all things web development. Here, you can explore my cool projects that blend stunning visuals with top-notch functionality. Using awesome tech like React and Node.js, I build everything from sleek front-ends to powerful back-ends. Whether you're hunting for inspiration or looking for a tech buddy to bring your digital dreams to life, you’re in the right place. Let's turn your ideas into amazing digital realities together. Dive in and have some fun exploring!</p>
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
            <section >
        <h1>Experience</h1>
      </section>
        </header>
    )
}

export default HeroSection
