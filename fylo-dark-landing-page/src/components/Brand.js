import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../utils/responsive'

const IMG = styled.img`
    width: 150px;
    max-width: 150px;

    ${mq[0]} {
        max-width: 80px;
    }
`

export default () => (
    <IMG src={ require('../images/logo.svg') } alt="fylo logo" />
)