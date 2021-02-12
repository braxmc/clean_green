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

