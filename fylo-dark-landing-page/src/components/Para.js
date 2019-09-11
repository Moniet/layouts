import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../utils/responsive'

const Para = styled.p`
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
    color: white;
    margin-bottom: 1em;
    ${mq[0]} {
        font-size: 0.85em;
    }
`

export default ({ children }) => 
    <Para> 
        { children } 
    </Para>
