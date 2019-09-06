import React from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1`
    font-size: 2.5em;
    font-weight: 700;
    line-height: 1.5;
    margin: 1em 0 0.5em 0;
    color: white;
`

export default ({ children }) =>  
    <H1> 
        { children }
    </H1>
