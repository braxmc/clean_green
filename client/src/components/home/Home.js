import React from 'react' 

import { HomeWrap, HeaderWrap, HeaderCard, Header, Ul, Info } from './HomeElements'

const Home = () => (
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
)

export default Home;