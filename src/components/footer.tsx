import { Link } from 'gatsby'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { ContentfulBlogPost } from '../types/all-contentful-blogs'

function Footer( { blogs }: { blogs: ContentfulBlogPost[] }) {
    return (
        <footer className="footer">
            <div className=" flex-1 grid grid-cols-1 md:grid-cols-3">
                <section className="section">
                    <h3>Built with:</h3>
                    <ul>
                        <li className="my-2">React</li>
                        <li className="my-2">Gatsby</li>
                        <li className="my-2">GraphQL</li>
                        <li className="my-2">Tailwind CSS</li>
                    </ul>
                </section>
                <section className="section">
                    <h3>Latest Blogs:</h3>
                    <ul>
                        {blogs && blogs.slice(0, 3).map((blog: any) => (
                            <li key={blog.id} className="my-2">
                                <Link to={`/blog/${blog.slug}`} className=" my-2" key={blog.id}>
                                    {blog.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section">
                    <h3>
                        Social Media Links:
                    </h3>
                    <div className="social-media-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/edgar-rojas-developer/" className="btn">
                            <FaLinkedinIn className="icon" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ed-full-stack-dev" className="btn">
                            <FaGithub className="icon" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC28Ql-WMce8icYWDj-21gwA" className="btn">
                            <FaYoutube className="icon" />
                        </a>
                    </div>
                </section>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Edgar Rojas</p>
            </div>
        </footer>
    )
}

export default Footer
