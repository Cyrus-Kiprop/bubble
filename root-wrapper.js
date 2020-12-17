import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle, theme } from "./src/theme/global-style"
import { ThemeProvider } from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"

export const WrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </ThemeProvider>
  )
}

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}
