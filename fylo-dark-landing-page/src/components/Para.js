import React from 'react'
import styled from '@emotion/styled'

const Para = styled.p`
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
    color: white;
    margin: 0 auto 2em auto;
`

export default ({ children }) => 
    <Para> 
        { children } 
    </Para>
