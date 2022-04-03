import React from 'react'
import styled from 'styled-components'

const Left = () => {
    return (
        <PapaCont>
            <Title></Title>
            <Socials>
                <A href="https://www.instagram.com/waxanimations/" target="_blank"><img alt="" src="/IG-logo.svg"></img></A>
                <A href="https://www.linkedin.com/in/alexander-waxin-07a914201" target="_blank">
                    <SVG2 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><Path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></SVG2>
                </A>
            </Socials>
        </PapaCont>
    )
}


const PapaCont = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33.33%;
  width: 100%;

  @media screen and (max-width: 500px) {
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

const Title = styled.p`
  color: yellow;
  font-size: 19px;
  font-weight: 700;
`

const Socials = styled.div`
  text-align: right;
  box-sizing: border-box;
  padding-right: 35px;
  padding: 20px;
  height: 250px;
`

export default Left