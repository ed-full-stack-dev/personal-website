import React from 'react'
import { Link } from 'gatsby';

function Navigation() {
    return (
        <nav className='navigation'>
            <div className="logo">
                <figure>
                    <img src="../../logo-blue.png" alt="web dev node logo" />
                </figure>
            </div>
            <ul>
                <li>
                    <Link activeClassName='text-violet-600' to='/'>Home</Link>
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
