import React from 'react'
import { Navbar, Nav } from 'reactstrap'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
       <Navbar color="danger" dark expand="md">
          <Nav navbar className="ml-auto">
            <small className="text-white">Copyright {year}</small>
          </Nav>
       </Navbar>
    </div>
  )
}

export default Footer
