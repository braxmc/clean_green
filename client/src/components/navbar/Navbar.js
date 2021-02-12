import React from 'react'

import { withRouter } from 'react-router-dom'

import { Wrap, Img, NavWrap, Nav } from './NavbarElements'

import Logo from '../images/logo2.png'

const Navbar = () => (
  <Wrap>
    <Nav to='/'><Img src={Logo} alt='logo' /></Nav>
    <NavWrap>
      <Nav to='/'>Home</Nav>
      <Nav to='/about'>About</Nav>
      <Nav to='/services'>Services</Nav>
      <Nav to='/contact'>Contact</Nav>
    </NavWrap>
  </Wrap>
)

export const ConnectedNavbar = () => {
  return (
    <Navbar />
  );
};
export default withRouter(ConnectedNavbar);