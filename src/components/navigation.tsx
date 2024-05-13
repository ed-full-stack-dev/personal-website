import React from 'react'
import { Link } from 'gatsby'
function Navigation() {
    return (
        <nav className='flex justify-between min-h-14 items-center'>
            <div className="logo text-2xl font-bold pl-3">Edgar Rojas</div>
            <ul className='space-x-4 px-3 text-2xl font-medium hidden md:flex'>
                <li>
                    <Link activeClassName='text-violet-600' to='/'>Home</Link>
                </li>
                <li>
                    <Link activeClassName='text-violet-600' to='/about'>About</Link>
                </li>
                <li>
                    <Link activeClassName='text-violet-600' to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link activeClassName='text-violet-600' to='/blog'>Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
