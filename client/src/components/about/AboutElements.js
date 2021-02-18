import styled from 'styled-components'

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EBEBEB;
`

export const AboutTitle = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  padding: 40px 0px;

  background: linear-gradient(to right, #60BC46, #019DD0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  background-color: lightgray;
  border-radius: 20px;
  border: 2px solid #000;
  padding: 30px 0;
  margin-bottom: 20px;
`

export const AboutInfo = styled.p`
  width: 600px;
  font-family: 'Montserrat', sans-serif;
  text-indent: 40px;
  line-height: 25px;
  font-size: 15px;
`