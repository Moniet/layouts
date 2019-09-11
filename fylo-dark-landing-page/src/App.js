import React from 'react';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from './utils/theme'
import Nav from './components/Nav'
import Intro from './components/Intro'
import InfoGrid from './components/InfoGrid'
import Insight from './components/Insight';
import Testimonials from './components/Testimonials';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background: ${colors.bgDark};
`

const App = () => (
  <>
    <Global 
      styles={css`
        h1,h2,h3,h4,h5,h6 {
          font-family: 'Raleway', 'Helvetica', 'Arial', sans-serif;
          color: white;
        }

        p {
          color: white;
        }

        a, button {
          cursor: pointer;
        }
      `}
    />

    <Nav />
    <Container>
      <Intro />
      <InfoGrid />
      <Insight />
      <Testimonials />
      <SignUp />
      <Footer />
    </Container>
  </>
)

export default App;
