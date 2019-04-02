import React from "react"
import { createGlobalStyle } from "styled-components"
import { styles } from "../utils"

import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: adobe-garamond-pro, serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    font-size: 1.2rem;
    color: ${styles.colors.mainDark};
    background: ${styles.colors.mainLight};
    width: 95vw;
    margin: 0 auto;
    position: relative;
  }

p {margin-bottom: 1.15em;}

h1, h2, h3, h4, h5 {
  font-weight: 700;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 2.488em;
}

h2 {font-size: 2.074em;}

h3 {font-size: 1.728em;}

h4 {font-size: 1.44em;}

h5 {font-size: 1.2em;}

a {
  all: unset;
  cursor: pointer;
}
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout