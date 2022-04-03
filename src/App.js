import React from 'react'
import styled from 'styled-components'
import Right from './right.js'
import Left from './left.js'

const App = () => {
  return (
    <Cont>
      <IframeCont>
        <Iframe frameBorder="0" allow="autoplay" data-ready="true" data-vimeo-initialized="true" data-desktop="514264128" data-mobile="514264128" muted="" src="https://player.vimeo.com/video/694042990?h=fa29485693&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;muted=1&amp;background=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;transparent=0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" dataready="true"></Iframe>
      </IframeCont>
      <Overlay>
        <Left></Left>
        <Center>
          <A href="">
            <Title>
              Waxanimations
            </Title>
          </A>
        </Center>
        <Right></Right>
        <Blackbox></Blackbox>
      </Overlay>
    </Cont>
  )
}

export default App


const Cont = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: black;
`

const Blackbox = styled.div`
  width: 100%;
  height: 60px;
  animation-name: invis;
  animation-duration: 13s;
  position:absolute;
  bottom: 0;
  z-index: -1;
  

  @keyframes invis {
    from{
      background-color: black;
    }
    99%{
      background-color: black;
    }
    to{
      background-color: transparent;
    }

`

const Title = styled.p`
  color: white;
  font-size: 19px;
  font-weight: 700;
  justify-content: center;
  outline: none;
  color: white;
  cursor: pointer;
  animation: animate 3.5s linear infinite;
  }

@keyframes animate {
    0%{
        text-shadow: 0 0 #fbfcfd;
    }
    30%{
        text-shadow: 0 0 #fbfcfd, 2.5px 0 #fbfcfd;
    }
    70%{
        text-shadow: 0 0 #fbfcfd, -2.5px 1px #fbfcfd;
    }
    100%{
        text-shadow: 0 0 #fbfcfd;
    }
`


const Iframe = styled.iframe`
width: 100%; 
height: 100%;

@media screen and (max-width: 500px) {
  
}

`
const IframeCont = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%; 
height: 100%;
margin: 0;
padding: 0;
z-index: 0;
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  height: 37%;
  text-align: center;
  align-items: center;
  width: 100%;

  @media screen and (max-height: 500px) {
    height: 36%;
  }
  @media screen and (min-height: 600px) {
    height: 39%;
  }
  @media screen and (min-height: 700px) {
    height: 42%;
  }

  @media screen and (min-height: 800px) {
    height: 48%;
  }


`

const Path = styled.path`
  color: white;
  fill: white;
`

const SVG2 = styled.svg`
  color: white;
  fill: white;
  padding: 3.5px;
  padding-left: 15px;
  `

const A = styled.a`
  color: white;
  text-decoration: none;
`


