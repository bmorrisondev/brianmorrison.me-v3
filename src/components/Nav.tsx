import { Link } from 'gatsby'
import React, { useState } from 'react'
import NavLink from './NavLink'
// @ts-ignore
import SiteLogo from '../images/logo.png'

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex justify-between p-2">
      <NavLink to="/" className="flex items-center text-black hover:text-black">
        <img className="mr-2" src={SiteLogo} alt="BrianMorrison.me Logo" height="40" width="40" />
        <span className="text-black"> Brian Morrison II</span>
      </NavLink>
      <div className="space-x-2 items-center hidden sm:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/uses">Uses</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex items-center sm:hidden">
        <a href="#" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`bx bx-menu-alt-right bx-md  ${isMobileMenuOpen ? 'text-black' : 'text-gray-500 hover:text-black'}`}></i>
        </a>
        {isMobileMenuOpen && (
          <div className="bg-white shadow-lg absolute top-[56px] left-0 right-0 flex flex-col space-y-2 p-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/uses">Uses</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav