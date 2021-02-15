import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  background-color: #242526;
`

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Icon = styled.img`
  height: 35px;
`

export const SocialInfo = styled.p`
  font-family: 'Merriweather', serif;
  color: #FFF;
  font-size: 22px;
  padding-left: 10px;
`

export const LinksWrap = styled.div`
  display: flex;
  flex-direction: row;
`

export const Links = styled(Link)`
  font-family: 'Merriweather', serif;
  color: #FFF;
  padding-top: 30px;
  padding-right: 50px;
  padding-left: 50px;
  font-size: 20px;
`

export const Cr = styled.p`
  font-family: 'Merriweather', serif;
  color: #FFF;
  padding-top: 50px;
  font-size: 10px;
`