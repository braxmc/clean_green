import React from 'react'

import { FooterWrap, SocialWrap, Icon, SocialInfo, LinksWrap, Links, Cr } from './FooterElements'

import Fb from '../images/fbIcon.png'

const Footer = () => (
  <FooterWrap>
    <SocialWrap>
      <a href='https://www.facebook.com/CleanAndGreenSLC/' target='_blank' rel="noreferrer">
        <Icon src={Fb} alt='Facebook icon' />
        <SocialInfo>Follow us on Facebook!</SocialInfo>
      </a>
    </SocialWrap>
    <LinksWrap>
      <Links to='/' >Home</Links>
      <Links to='/about'>About</Links>
      <Links to='/services'>Services</Links>
      <Links to='/contact'>Contact</Links>
    </LinksWrap>
      <Cr>copyright © 2021 Clean & Green SLC</Cr>
  </FooterWrap>
)

export default Footer;