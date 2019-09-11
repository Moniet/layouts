/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import { mq } from '../utils/responsive'
import H1 from './H1'


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

    ${mq[0]} { 
        width: 85%; 
        margin-bottom: -70%;
    }
`

const Illustration = styled.img`
    width: 100%;
    max-width: 100%;
    margin-bottom: 4em;
`

const P = styled.p`
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
    color: white;
    margin: 0 auto 2em auto;
    width: 75%;
    ${mq[0]} {
        font-size: 1em;
        width: 100%;
    }
`

const Button = styled.button`
    width: 30%;
    padding: 1em;
    border: none;
    border-radius: 50px;
    font-size: 1em;
    font-weight: 700;
    color: white;
    background: ${colors.btnGradient};

    ${mq[0]} {
        width: 80%;
    }
`

const Decoration = styled.img`
    position: relative;
    margin-top: -18%;
    width: 100%;
    z-index: 0;
`

const Intro = () => (
    <Container>
        <InfoContainer>
            <Illustration src={ require('../images/illustration-intro.png') } />
            <H1>All your files in one secure location, accessible anywhere. </H1>
            <P>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</P>
            <Button>Get Started</Button>
        </InfoContainer>
        <Decoration src={require('../images/bg-curvy-desktop.svg') }/>
    </Container>
)

export default Intro
