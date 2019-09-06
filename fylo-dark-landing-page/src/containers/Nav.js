import React from 'react'
import styled from '@emotion/styled'
import Link from '../components/Link'
import Brand from '../components/Brand'
import { colors } from '../utils/theme'

const Header = styled.header`
    width: 100vw;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 4em;
    background-color: ${colors.bgLight};
`

const List = styled.ul`
    display: flex;
`

const ListItem = styled.li`
    list-style-type: none;
    margin-left: 2em;
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