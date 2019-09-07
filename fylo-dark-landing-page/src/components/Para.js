import React from 'react'
import styled from '@emotion/styled'

const Para = styled.p`
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
    color: white;
    margin-bottom: 1em;
`

export default ({ children }) => 
    <Para> 
        { children } 
    </Para>
