/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'

const btn = css`
    padding: 1em;
    border-radius: 20px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    color: white;
    background: ${colors.btnGradient};
    cursor: pointer;
`

const Button = ({ children }) => (
    <button css={btn} >
        { children }
    </button>
)

export default Button