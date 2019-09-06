import React from 'react'
import styled from '@emotion/styled'

const IMG = styled.img`
    width: 100px;
    max-width: 100px;
`

const Brand = () => (
    <IMG src={ require('../images/logo.svg') } alt="fylo logo" />
)

export default Brand