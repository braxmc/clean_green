import React from 'react' 

import { HomeWrap, HeaderWrap, HeaderCard, Header, Ul, Info, ServicesWrap, Regular, Img, ServiceCard, ServiceTitle, ServiceInfo, InfoWrap, Flip, GreenButton, BlueButton, Nav, ContactWrap, ContactTitle, ContactInfo, ContactLinks, Call, Email, Icon } from './HomeElements'

import Service1 from '../images/sample2.jpg'
import Service2 from '../images/sample1.jpg'
import Service3 from '../images/sample3.jpg'
import Service4 from '../images/sample4.jpg'

import Phone from '../images/PhoneIcon.png'
import Mail from '../images/MailIcon.png'

const Home = () => (
  <>
    <HomeWrap>
      <HeaderWrap>
        <HeaderCard>
          <Header>Utah's Best Cleaning Service, and we're here to prove it!</Header>
          <Ul>
          <Info>We are an eco-friendly cleaning service!</Info>
          <Info>We use products that are not only good for your home, but for the planet as well!</Info>
          <Info>We offer cleaning services for residential homes, businesses, and post-construction homes.</Info>
          </Ul>
        </HeaderCard> 
      </HeaderWrap>
    </HomeWrap>
    <ContactWrap>
      <ContactTitle>Salt Lake City Cleaning Services</ContactTitle>
      <ContactInfo>Click to call or email for a quote today!</ContactInfo>
      <ContactLinks>
        <a href='tel:+18019139229'>
          <Call>
            <Icon src={Phone} alt='Phone icon'/>
            <ContactInfo>801-913-9229</ContactInfo>
          </Call>
        </a>
        <a href='mailto:cleanandgreenslc@gmail.com'>
          <Email>
            <Icon src={Mail} alt='Mail icon' />
            <ContactInfo>cleanandgreenslc@gmail.com</ContactInfo>
          </Email>
        </a>
      </ContactLinks>
    </ContactWrap>
    <ServicesWrap>
      <Regular>
        <Img src={Service1} alt='Picture of residential cleaning' />
        <InfoWrap>
          <ServiceCard>
            <ServiceTitle>Residential Cleaning</ServiceTitle>
            <ServiceInfo>Pet Friendly</ServiceInfo>
            <ServiceInfo>Monthly, Bi-Weekly, Weekly</ServiceInfo>
            <ServiceInfo>Eco Friendly Cleaning Supplies</ServiceInfo>
            <Nav to='/services'>
              <BlueButton>Learn More</BlueButton>
            </Nav>
          </ServiceCard>
        </InfoWrap>
      </Regular>
      <Flip>
        <Img src={Service2} alt='Picture of business cleaning' />
        <InfoWrap>
          <ServiceCard>
            <ServiceTitle>Business Cleaning</ServiceTitle>
            <ServiceInfo>Eco Friendly</ServiceInfo>
            <ServiceInfo>Monthly, Bi-Weekly, Weekly</ServiceInfo>
            <ServiceInfo>Eco Friendly Cleaning Supplies</ServiceInfo>
            <Nav to='/services'>
              <GreenButton>Learn More</GreenButton>
            </Nav>
          </ServiceCard>
        </InfoWrap>
      </Flip>
      <Regular>
        <Img src={Service3} alt='Picture of one time cleaning' />
        <InfoWrap>
          <ServiceCard>
            <ServiceTitle>One Time Cleaning</ServiceTitle>
            <ServiceInfo>Move In/Move Out</ServiceInfo>
            <ServiceInfo>Residential Or Business</ServiceInfo>
            <ServiceInfo>One And Done, No Strings Attached</ServiceInfo>
            <Nav to='/services'>
              <BlueButton>Learn More</BlueButton>
            </Nav>
          </ServiceCard>
        </InfoWrap>
      </Regular>
      <Flip>
        <Img src={Service4} alt='Picture of post construction cleaning' />
        <InfoWrap>
          <ServiceCard>
            <ServiceTitle>Post-Construction Cleaning</ServiceTitle>
            <ServiceInfo>Post-Remodel</ServiceInfo>
            <ServiceInfo>New Construction</ServiceInfo>
            <ServiceInfo>Make Your New Additions Sparkle</ServiceInfo>
            <Nav to='/services'>
              <GreenButton>Learn More</GreenButton>
            </Nav>
          </ServiceCard>
        </InfoWrap>
      </Flip>
    </ServicesWrap>
  </>
)

export default Home;