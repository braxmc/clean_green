import React from 'react'

import Phone from '../images/WhitePh.png'
import Mail from '../images/WhiteMail.png'
import Fb from '../images/WhiteFb.png'

import { ContactWrap, ContactTitle, InfoWrap, Icon, Info, SocialWrap, InfoTitle } from './ContactElements'

const Contact = () => (
  <ContactWrap>
    <ContactTitle>Contact Us</ContactTitle>
    <SocialWrap>
      <InfoTitle>Click below to Contact</InfoTitle>
      <InfoWrap>
        <a href='tel:+18019139229'>
          <Icon src={Phone} />
          <Info>801-913-9229</Info>
        </a>
      </InfoWrap>
      <InfoWrap>
        <a href='mailto:cleanandgreenslc@gmail.com'>
          <Icon src={Mail} />
          <Info>cleanandgreenslc@gmail.com</Info>
        </a>
      </InfoWrap>
      <InfoWrap>
        <a href='https://www.facebook.com/CleanAndGreenSLC/' target='_blank' rel="noreferrer">
          <Icon src={Fb} />
          <Info>Contact us on Facebook</Info>
        </a>
      </InfoWrap>
    </SocialWrap>
  </ContactWrap>
)

export default Contact;