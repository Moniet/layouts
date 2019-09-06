/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background: ${ colors.bgLight };
    margin: 0 auto;
    padding: 2em 0 0;
`

const InfoContainer = styled.div`
    width: 50%;
    text-align: center;
    z-index: 10;
`

const IMG = styled.img`
    width: 100%;
    max-width: 100%;
`

const H1 = styled.h1`
    font-size: 2.5em;
    font-weight: 700;
    line-height: 1.5;
    margin: 1em 0 0.5em 0;
    color: white;
`

const P = styled.p`
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
    color: white;
    margin-bottom: 2em;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
`

const Button = styled.button`
    width: 35%;
    padding: 1.5em;
    border: none;
    border-radius: 50px;
    font-weight: 700;
    color: white;
    background: ${colors.btnGradient};
`

const Art = styled.img`
    position: relative;
    margin-top: -18%;
    width: 100%;
    z-index: 0;
`

const Intro = () => (
    <Container>
        <InfoContainer>
            <IMG src={ require('../images/illustration-intro.png') } />
            <H1>All your files in one secure location, accessible anywhere. </H1>
            <P>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</P>
            <Button>Get Started</Button>
        </InfoContainer>
        <Art src={require('../images/bg-curvy-desktop.svg') }/>
    </Container>
)

export default Intro
