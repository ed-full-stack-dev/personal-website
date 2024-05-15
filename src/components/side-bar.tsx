import React from 'react'

function SideBarBlog() {
  return (
    <div className=" col-span-1">
          <div className="sticky top-20 bg-gray-100 p-2 md:rounded-lg md:shadow-xl">
            <h1 className=" text-lg font-bold text-center">Categories</h1>
            <ul className=" list-disc ml-4 text-indigo-600">
              <li className="y-1">React</li>
              <li className="y-1">Node</li>
              <li className="y-1">Express</li>
              <li className="y-1">MongoDB</li>
              <li className="y-1">PostgreSQL</li>
              <li className="y-1">GraphQL</li>
              <li className="y-1">TypeScript</li>
              <li className="y-1">JavaScript</li>
              <li className="y-1">HTML</li>
              <li className="y-1">CSS</li>
            </ul>
          </div>
        </div>
  )
}

export default SideBarBlog;
