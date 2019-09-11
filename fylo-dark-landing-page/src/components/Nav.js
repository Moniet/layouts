import React from 'react'
import styled from '@emotion/styled'
import Link from './Link'
import Brand from './Brand'
import { colors } from '../utils/theme'
import { mq } from '../utils/responsive'

const Header = styled.header`
    width: 100vw;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 4em;
    background-color: ${colors.bgLight};

    ${mq[0]} {
        padding: 2em 1em;
    }
`

const List = styled.ul`
    display: flex;
`

const ListItem = styled.li`
    list-style-type: none;
    margin-left: 2em;
    ${mq[0]} { margin-left: 1.5em; }
`

export default () => (
    <Header>
        <Nav>
            <Brand />
            <List>
                <ListItem>
                    <Link href="#"> Features </Link>
                </ListItem>
                <ListItem>
                    <Link href="#"> Team </Link>
                </ListItem>
                <ListItem>
                    <Link href="#"> Sign In </Link>
                </ListItem>
            </List>
        </Nav>
    </Header>
)