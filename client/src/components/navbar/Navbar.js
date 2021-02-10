import React from 'react'

import { Wrap, Left, Img } from './NavbarElements'

import Logo from '../images/clean4.JPG'

const Navbar = () => (
  <Wrap>
    <Left>
      <Img src={Logo} alt='logo' />
    </Left>
  </Wrap>
)

export default Navbar;