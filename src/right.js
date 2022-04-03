import React from 'react'
import styled from 'styled-components'

const Right = () => {
    return (
        <PapaCont>
            <Text>
                <Title>Current Employment</Title>
                <p>Freelancing</p>
            </Text>
            <RightCont>
                <Title>Contacts</Title>
                <A href="tel:46735392530" target="_blank"><Text2>+46735392530</Text2></A>
                <A href="mailto: alexander@nmbrs.studio" target="_blank"><Text2>alexander@nmbrs.studio</Text2></A>
            </RightCont>
        </PapaCont>
    )
}


const PapaCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100px;
  width: 100%;
  align-self: flex-end;


  @media screen and (max-width: 500px) {
    min-width: 120px;
  }

`
const Text = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 15px;
  text-decoration: none;
  width: 70%;
  padding-bottom: 5px;
  margin-bottom: 5px;
  
  @media screen and (max-width: 500px) {
    padding-left: 10px;
    min-width: 100px;
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
}
`


const RightCont = styled.div`
  text-align: right;
  box-sizing: border-box;
  padding-left: 35px;
  padding: 15px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: 15.5px;
  margin-right: 2px;


  @media screen and (max-width: 600px) {
    text-align: right;
    padding: 15px 5px;
    padding-left: 0;
    padding-right: 5px;
  }
  @media screen and (max-width: 350px) {
    margin: 0;
  }
`

const NMBRS = styled.h1`
  text-decoration: none;
  color: white;
  font-size: 14px;
  padding-bottom: 0;
  margin-bottom: 0;
  :visited{
    color: white;
  }
`

const SVG = styled.svg`
  color: white;
  height: 30px;
  width: 100px;
  fill: white;
  `

const Path = styled.path`
  color: white;
  fill: white;
`

const A = styled.a`
  color: white;
  text-decoration: none;
`

const Text2 = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 700;
  margin : 4px;
`
const Title = styled.p`
  color: yellow;
  font-size: 19px;
  font-weight: 700;

  @media screen and (max-width: 350px) {
    font-size: 16px;
}
`
export default Right