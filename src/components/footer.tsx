import { Link } from 'gatsby'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Footer({ blogs }: any = []) {
    return (
        <footer className="bg-gray-800 text-white  p-4 min-h-[400px] flex flex-col justify-between ">
            <div className=" flex-1 grid grid-cols-1 md:grid-cols-3">
                <section className=" row-span-1 p-2">
                    <h3 className=" text-lg font-bold text-purple-500">Built with:</h3>
                    <ul className=" list-disc pl-5 font-mono">
                        <li className="my-2">React</li>
                        <li className="my-2">Gatsby</li>
                        <li className="my-2">GraphQL</li>
                        <li className="my-2">Tailwind CSS</li>
                    </ul>
                </section>
                <section className=" row-span-1 p-2">
                    <h3 className=" text-lg font-bold text-purple-500">Latest Blogs:</h3>
                    <ul className=" list-disc pl-5 font-mono">
                        {blogs && blogs.slice(0, 3).map((blog: any) => (
                            <li key={blog.id} className="my-2">
                                <Link to={`/blogs/${blog.slug}`} className=" my-2" key={blog.id}>
                                    {blog.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className=" row-span-1 p-2">
                    <h3 className=" text-lg font-bold text-purple-500">
                        Social Media Links:
                    </h3>
                    <div className="flex space-x-5 justify-center mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/edgar-rojas-developer/" className="btn">
                            <FaLinkedinIn className="icon" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ed-full-stack-dev" className="btn">
                            <FaGithub className="icon" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="btn">
                            <FaYoutube href='https://www.youtube.com/channel/UC28Ql-WMce8icYWDj-21gwA' className="icon" />
                        </a>
                    </div>
                </section>
            </div>
            <div className="w-full text-center text-sm font-thin">
                <p>&copy; {new Date().getFullYear()} Edgar Rojas</p>
            </div>
        </footer>
    )
}

export default Footer
