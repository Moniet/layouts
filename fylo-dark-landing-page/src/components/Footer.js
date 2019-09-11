import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import Brand from './Brand'
import Link from './Link'
import { mq } from '../utils/responsive'

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    padding: 15em 5em 5em;
    background: ${colors.bgFooter};

    & > img {
        margin-bottom: 3em;
        min-width: 150px;
    }

    ${mq[0]} {
        padding: 15em 2em 2em;
    }
`

const Flex = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: ${props => props.between ? 'space-between' : 'center'};

    ${mq[0]} {
        flex-flow: ${props => props.between ? 'column nowrap' : 'row nowrap'};
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Icon = styled.div`
    width: 32px;
    min-width: 32px;
    margin-right: 1em;
`

const List = styled.ul`
    margin-right: 2em;
    ${mq[0]} { margin-bottom: 2em; }
`

const ListItem = styled.li`
    color: white;
    margin-bottom: 1em;
    ${mq[0]} {
        margin-bottom: 1.25em;
    }
`

const IMG = styled.img`
    max-width: 100%;
    height: auto;
`

const Location = styled.div`
    flex-basis: 30%;

    p {
        line-height: 1.5em;
        margin-top: -0.25em;
    }

    ${mq[0]} {
        margin-bottom: 1.25em;
    }
`


export default () => (
    <Footer>
        <Brand />
        <Flex between>
            <Location>
                <Flex>
                    <Icon>
                        <IMG src={ require('../images/icon-location.svg') } alt="" />
                    </Icon>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed est eget augue tincidunt molesti
                    </p>
                </Flex>
            </Location>

            <List>
                <Column>
                    <ListItem>
                        <Flex>
                            <Icon>
                                <IMG src={ require('../images/icon-phone.svg') } alt="" />
                            </Icon>
                            <p>+1-543-123-4567</p>
                        </Flex>
                    </ListItem>

                    <ListItem>
                        <Flex>
                            <Icon>
                                <IMG src={ require('../images/icon-email.svg') } alt="" />
                            </Icon>
                            <Link href={ 'mailto: jane-dough@example.com' }>jane-dough@example.com</Link>
                        </Flex>
                    </ListItem>
                </Column>
            </List>

            <List>
                <Column>
                    <ListItem><Link href="#">About Us</Link></ListItem>
                    <ListItem><Link href="#">Jobs</Link></ListItem>
                    <ListItem><Link href="#">Press</Link></ListItem>
                    <ListItem><Link href="#">Blogs</Link></ListItem>
                </Column>
            </List>

            <List>
                <Column>
                    <ListItem><Link href="#">Contact Us</Link></ListItem>
                    <ListItem><Link href="#">Terms</Link></ListItem>
                    <ListItem><Link href="#">Privacy</Link></ListItem>
                </Column>
            </List>

            <Flex>
                <Icon>
                    <Link href="#">
                        <img src={ require('../images/icon-facebook.svg') } alt=""/>
                    </Link>
                </Icon>
                <Icon>
                    <Link href="#">
                        <img src={ require('../images/icon-twitter.svg') } alt=""/>
                    </Link>
                </Icon>
                <Icon>
                    <Link href="#">
                        <img src={ require('../images/icon-instagram.svg') } alt=""/>
                    </Link>
                </Icon>
            </Flex>
        </Flex>
    </Footer>
)
