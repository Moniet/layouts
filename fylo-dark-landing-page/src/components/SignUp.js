import React from 'react'
import styled from '@emotion/styled'
import Para from './Para'
import H1 from './H1'
import Button from './Button'

const Container = styled.div`

`

const Form = styled.form`
    display: flex;

    input[type="text"] {

    }

    input[type="submit"] {

    }
`

const SignUp = () => (
    <Container>
        <H1>Get Early Access Today</H1>
        <Para>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Para>
        <Form />
    </Container>
)