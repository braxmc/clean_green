import styled from 'styled-components'

import Bg from '../images/cleanpic.jpg'

export const HomeWrap = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 78vh;
`

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  height: 30vh;
  min-height: 250px;
  width: 800px;
  border: 1px solid #000000;
  border-radius: 20px;
`

export const Header = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 35px;
`

export const Ul = styled.ul`

`

export const Info = styled.li`
  font-family: 'Montserrat', sans-serif;
  padding-top: 15px;
  width: 600px;
`

export const ServicesWrap = styled.div`

`

export const Regular = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #019DD0;
  height: 450px;
`

export const Flip = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  background-color: #60BC46;
  height: 450px;
`

export const Img = styled.img`
  display: flex;
  align-self: center;
  border-radius: 20px;
  border: 2px solid #000;
  width: 50%;
  height: 380px;
  width: 380px;
`

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
`

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  border: 2px solid #000;
  width: 40vw;
  height: 30vh;
`

export const ServiceTitle = styled.h2`
  padding-top: 20px;
  font-family: 'Oswald', sans-serif;
  font-size: 35px;
`

export const ServiceInfo = styled.li`
  padding-top: 20px;
  font-family: 'Montserrat', sans-serif;
`