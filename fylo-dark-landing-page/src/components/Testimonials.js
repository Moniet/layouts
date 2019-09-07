import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import Grid from './Grid'
import Para from './Para'
import quotes from '../images/bg-quotes.png'

const Container = styled.div`
    position: relative;
    width: 90%;
    margin-top: 20vh;
    font-size: 14px;

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 60px;
        height: 60px;
        background-image: url(${require('../images/bg-quotes.png')});
        background-size: 100%;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        transform: translate(-15%, -65%);
        z-index: 0;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    border-radius: 5px;
    background: ${colors.bgCard};
    width: calc(33% - 1em);
    ${'' /* box-shadow: 5px 5px rgba(255,255,255,0.1); */}
    z-index: 10;
`

const Profile = styled.div`
    display: flex;
    margin-top: 1em;
    img {
        width: 32px;
        border-radius: 50%;
        margin-right: 0.5em;
    }

    h3 {
        font-weight: 700;
        margin-bottom: 0.25em;
    }

    p {
        font-weight: 100;
        font-size: 0.75em;
    }
`

const Testimonials = () => (
    <Container>
        <Grid between>
            <Card>
                <Para>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</Para>
                <Profile>
                    <div>
                        <img src={ require('../images/profile-1.jpg') }/>
                    </div>
                    <div>
                        <h3>Satish Patel</h3>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </Profile>
            </Card>

            <Card>
                <Para>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</Para>
                <Profile>
                    <div>
                        <img src={ require('../images/profile-2.jpg') }/>
                    </div>
                    <div>
                        <h3>Bruce McKenzie</h3>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </Profile>
            </Card>

            <Card>
                <Para>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</Para>
                <Profile>
                    <div>
                        <img src={ require('../images/profile-3.jpg') }/>
                    </div>
                    <div>
                        <h3>Ivy Boyd</h3>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </Profile>
            </Card>
        </Grid>
    </Container>
)

export default Testimonials