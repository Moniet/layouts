/** @jsx jsx */
import { jsx, css } from '@emotion/core' 
import React from 'react'
import styled from '@emotion/styled'
import Grid from './Grid'
import { mq } from '../utils/responsive'

const GridItem = styled.div`
    width: 40%;
    text-align: center;
    margin-bottom: 10vh;
    ${mq[0]} {
        width: 100%;
    }
`

const H2 = styled.h2`
    font-size: 1.25em;
    font-weight: 700;
    margin-bottom: 1em;
`

const P = styled.p`
    color: white;
    line-height: 1.5;
`

const Icon = styled.img`
    height: 75px;
    margin-bottom: 2em;
`

const Container = styled.div`
    width: 70%;
    ${mq[0]} {
        padding-top: 100%;
        width: 80%;
    }
`

const InfoGrid = () => (
    <Container>
        <Grid between>
            <GridItem>
                <Icon src={ require('../images/icon-access-anywhere.svg')} alt="" />
                <H2>Access your files, anywhere</H2>
                <P>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</P>
            </GridItem>

            <GridItem>
                <Icon src={ require('../images/icon-security.svg')} alt="" />
                <H2> Security you can trust</H2>
                <P> 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</P>
            </GridItem>

            <GridItem>
                <Icon src={ require('../images/icon-collaboration.svg')} alt="" />
                <H2>Real-time collaboration</H2>
                <P>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</P>
            </GridItem>

            <GridItem>
                <Icon src={ require('../images/icon-any-file.svg')} alt="" />
                <H2>Store any type of file.</H2>
                <P>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</P>
            </GridItem>
        </Grid>
    </Container>
)

export default InfoGrid