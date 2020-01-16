

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Link from 'next/link'
import auth0 from '../../services/auth0';


const BsNavLink = (props) => {
    const {route, title} = props
    return (
        <Link href={route}>
            <a className='nav-link port-navbar-link'>{title}</a>
        </Link>

    ) 
}

const Login = () => {
    return (
        <span onClick = {auth0.login} className="nav-link port-navbar-link">Login</span>
    )
}

const Logout = () => {
    return (
        <span className="nav-link port-navbar-link">Logout</span>
    )
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Seugnjin Kim</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route = "/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route = "/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route = "/portfolios" title="Portfolio"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route = "/blogs" title="Blog"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route = "/cv" title="CV"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Login/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Logout/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;