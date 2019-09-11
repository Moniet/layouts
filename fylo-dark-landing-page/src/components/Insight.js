import React from 'react'
import styled from '@emotion/styled'
import Grid from './Grid'
import H1 from './H1'
import Para from './Para'
import { mq } from '../utils/responsive'

const Container = styled.div`
    width: 90%;
    ${mq[0]} {
        width: 80%;
    }
`
const IMG = styled.img`
    width: 100%;
`
const Info = styled.div`
    width: 50%;
    ${mq[0]} {
        width: 100%;
    }
`
const InfoHeader = styled.div`
    width: 55%;
    ${mq[0]} {
        width: 100%;
    }
`
const Art = styled.div`
    width: 50%;
    padding-right: 10vh;
    ${mq[0]} {
        width: 100%;
        margin-bottom: 3em;
    }
`

const Link = styled.a`
    position: relative;
    color: hsl(176, 68%, 64%);
    padding-bottom: 0.5em;
    border-bottom: solid 1px hsl(176, 68%, 64%);
`

const Arrow = styled.div`
    display: inline-block;
    width: 1em;
    height: auto;
    vertical-align: middle;
`

const Insight = () => (
    <Container>
        <Grid between>
            <Art>
                <IMG src={require('../images/illustration-stay-productive.png')} />
            </Art>
            <Info>
                <InfoHeader>
                    <H1>Stay productive, wherever you are</H1>
                </InfoHeader>
                <Para>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</Para>
                <Para>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. </Para>
                <Link>See how Fylo works <Arrow><IMG src={require('../images/icon-arrow.svg')} alt=""/></Arrow></Link>
            </Info>
        </Grid>
    </Container>
)

export default Insight