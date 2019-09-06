import React from 'react';
import logo from './logo.svg';
import Nav from './containers/Nav'
import Intro from './components/Intro'
import { Global, css } from '@emotion/core'

const App = () => (
  <>
    <Nav />
    <Intro />
    <Global 
      styles={css`
        h1,h2,h3,h4,h5,h6 {
          font-family: 'Raleway', 'Helvetica', 'Arial', sans-serif;
        }
      `}
    />
  </>
)

export default App;
