import React from 'react'
import styled from '@emotion/styled'
import Para from './Para'
import H1 from './H1'
import Button from './Button'
import { colors } from '../utils/theme'
import { mq } from '../utils/responsive'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10vh 0 0;
    width: 100vh;
    text-align: center;
    background-color: ${colors.bgLight};
    border-radius: 5px;
    padding: 4em;
    transform: translateY(50%);
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    ${mq[0]} {
        width: calc(100% - 2em);
        padding: 2em 1.5em;
        margin-top: 0;
    }
`

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    ${mq[0]} {
        flex-flow: column wrap;
    }

    input[type="text"] {
        padding: 1em 3em;
        margin-right: 1em;
        ${'' /* font-size: 1em; */}
        border: none;
        border-radius: 20px;
        flex-basis: 3fr;
        width: 70%;
        ${mq[0]} {
            width: 100%;
            padding: 1.5em 3em;
        }
    }

    button {
        width: 30%;

        ${mq[0]} {
            width: 100%;
            margin-top: 2em;
        }
    }
`

const SignUp = () => 
    <Container>
        <H1>Get early access today</H1>
        <Para>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Para>
        <Form onSubmit={ e => e.preventDefault() }>
            <input type="text" placeholder="jane-dough@example.com" aria-label="email"/>
            <Button>Get Started For Free</Button> 
        </Form>
    </Container>


export default SignUp