import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import { flipInY } from "react-animations"
import { GlobalStyle } from "../theme/global-style"

import bgImage from "../images/1062.jpg"
import Header from "./header"
import HeroSection from "./HeroSection"

const bounceAnimation = keyframes`${flipInY}`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PageWrapper>
        <MainWrapper>
          <Header />
          {children}
        </MainWrapper>
      </PageWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const PageWrapper = styled.div`
  /* background-image: url(${bgImage}); */
  /* background-size: contain; */
  background-color: #0479e6;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  z-index: 2;
`
const MainWrapper = styled.div`
  transition: all 0.7s ease-in-out;
  border-radius: 40px;
  max-width: 94%;
  height: 1400px;
  background-color: #222222;
  margin: 3% auto;
  position: relative;
  animation: 1s ${bounceAnimation};

  @media (max-width: 992px) {
    max-width: 100%;
    border-radius: 0%;
    margin-top: 0%;
  }
`

export default Layout
