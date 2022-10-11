import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/details"> Details </NavLink>
      </nav>
    </header>
  )
}

export default Header;