import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink
} from 'reactstrap'

const Header = () => {
  return (
    <>
      <Navbar color="danger" dark expand="md">
        <NavbarBrand tag={Link} to="/">News App</NavbarBrand>
        <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink 
              tag={Link}
              to="/home"
            >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/about"
            >About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header