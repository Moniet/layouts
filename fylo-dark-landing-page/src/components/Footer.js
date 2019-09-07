import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import Brand from './Brand'
import Link from './Link'
import Para from './Para'

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    padding: 8em 5em;
    background: ${colors.bgFooter};
`

const Flex = styled.div`
    display: flex;
    justify-content: ${props => props.between ? 'space-between' : 'center'};
`

const Icon = styled.div`
    width: 32px;
`

const List = styled.ul`
    margin-right: 2em;
`

const IMG = styled.div`
    max-width: 100%;
    height: auto;
`

export default () => (
    <Footer>
        <Brand />
        <Flex between>
            <Flex>
                <Icon>
                    <IMG></IMG>
                    <Para />
                </Icon>
            </Flex>
        </Flex>
    </Footer>
)
