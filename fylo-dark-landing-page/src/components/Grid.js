import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../utils/responsive'

const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: ${props => props.between ? 'space-between' : 'center' };
    align-items: center;

    ${mq[0]} {
        justify-content: center;
    }
`

export default ({ children, between }) => (
    <Grid between={ between ? true : false }>
        { children }
    </Grid>
)