import styled from 'styled-components'

export const ContactWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #EBEBEB;
  height: 78vh;
  min-height: 400px;
`

export const ContactTitle = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  padding: 60px 0px;

  background: linear-gradient(to right, #60BC46, #019DD0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`

export const Icon = styled.img`
  height: 35px;
`

export const Info = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  padding-left: 10px;

  background: linear-gradient(to right, #019DD0, #60BC46);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242526;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 20px 40px;
`

export const InfoTitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 40px;
  padding-bottom: 10px;

  background: linear-gradient(to right, #60BC46, #019DD0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`