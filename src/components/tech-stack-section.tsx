import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt, FaGithub, FaNpm, FaDocker, FaAws, FaGulp, FaSass, FaBootstrap, FaSlack } from 'react-icons/fa';
import { SiMongodb, SiTypescript } from 'react-icons/si';

export default function TechStackBar() {
    return (
        <section className="tech-stack-bar  ">
            <h2>Tech Stack</h2>
            <div className="icon-container">
                <div className="icon-list">
                    <FaReact />
                    <FaNodeJs />
                    <FaHtml5 />
                    <FaCss3 />
                    <FaJsSquare />
                    <FaGitAlt />
                    <FaGithub />
                    <FaNpm />
                    <FaDocker />
                    <FaAws />
                    <FaGulp />
                    <FaSass />
                    <FaBootstrap />
                    <FaSlack />
                    <SiMongodb />
                    <SiTypescript />
                </div>
            </div>
        </section>
    );
}