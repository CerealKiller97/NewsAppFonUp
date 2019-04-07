import React from 'react'
import { Navbar, Nav } from 'reactstrap'

const Footer = () => {
  return (
    <div>
       <Navbar color="danger" dark expand="md">
          <Nav navbar className="ml-auto">
            <small className="text-white">Copyright 2019</small>
          </Nav>
       </Navbar>
    </div>
  )
}

export default Footer
