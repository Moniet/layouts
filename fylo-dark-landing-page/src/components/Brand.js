import React from 'react'
import styled from '@emotion/styled'

const IMG = styled.img`
    width: 150px;
    max-width: 150px;
`

export default () => (
    <IMG src={ require('../images/logo.svg') } alt="fylo logo" />
)