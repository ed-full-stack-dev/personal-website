import React from 'react'
import Navigation from '../../components/navigation'
import { StaticImage } from 'gatsby-plugin-image'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { BsPuzzle } from "react-icons/bs";
function Blog() {
  return (
    <div>
      <Navigation />
      <section className="hero">
        <div className="wrapper">
          <div className="content">
            <div className="flex-center">
              <h1 className="title">Code & Creativity: My Journey in Web Development</h1>
            </div>
            <p className="description">Welcome to My Journey in Web Development, a space where I delve into the intertwined worlds of programming and innovation. As a seasoned web developer, I've navigated through complex codebases and crafted unique digital experiences that bridge functionality with artistry. Here, I share insights from my professional voyage—highlighting projects that challenged me, technologies that excited me, and creative solutions that made a difference. Whether you're a fellow developer, a curious learner, or somewhere in between, I hope my stories inspire you and ignite your passion for the ever-evolving landscape of web development.</p>
            <div className="links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ed-full-stack-dev" className="btn">
                <FaGithub className="icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/edgar-rojas-developer/" className="btn">
                <FaLinkedinIn className="icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC28Ql-WMce8icYWDj-21gwA" className="btn">
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>
          <div className="puzzle-pieces">
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog
