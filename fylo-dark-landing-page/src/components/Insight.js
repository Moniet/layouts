import React from 'react'
import styled from '@emotion/styled'
import Grid from './Grid'
import H1 from './H1'
import Para from './Para'

const Container = styled.div`
    width: 90%;
`

const IMG = styled.img`
    width: 100%;
`

const Info = styled.div`
    ${'' /* display: flex;
    flex-direction: column; */}
    width: 50%;
`

const InfoHeader = styled.div`
    width: 55%;
`

const Art = styled.div`
    width: 50%;
    padding-right: 10vh;
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
                <Para> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</Para>
                <Para>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. </Para>
            </Info>
        </Grid>
    </Container>
)

export default Insight