/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react'
import { colors } from '../utils/theme'
import { mq } from '../utils/responsive'

const link = css`
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: white;

    ${mq[0]} {
        font-size: 12px;
        font-weight: normal;
    }
`
const Link = ({ children, href }) => (
    <a css={link} href={href}>
        { children }
    </a>
)

export default Link
