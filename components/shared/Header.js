/* import React from 'react'
import {Link as NestLink} from '../../routes'
import '../../styles/main.scss'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>

                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link> 
                <Link href='/portfolios'>
                    <a>Portfolio</a>
                </Link> 
                <Link href='/blogs'>
                    <a>Blog</a>
                </Link> 
                <Link href='/cv'>
                    <a>CV</a>
                </Link>


                <style jsx>
                    {`
                    a {
                        font-size: 20px;
                    };

                    .customClass {
                        color: red;
                    }
                    `}
                    
                </style>
            </React.Fragment>
        )
    }
}

export default Header; */

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


const BsNavLink = (props) => {
    const {route, title} = props
    return (
        <Link href={route}>
            <a className='nav-link port-navbar-link'>{title}</a>
        </Link>

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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;