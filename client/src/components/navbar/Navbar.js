import React from 'react'

import { Wrap, Img, NavWrap, Nav } from './NavbarElements'

import Logo from '../images/logo2.png'

const Navbar = () => (
  <Wrap>
    <Img src={Logo} alt='logo' />
    <NavWrap>
      <Nav>Home</Nav>
      <Nav>About</Nav>
      <Nav>Services</Nav>
      <Nav>contact</Nav>
    </NavWrap>
  </Wrap>
)

export default Navbar;