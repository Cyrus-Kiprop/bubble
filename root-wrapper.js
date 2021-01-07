import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './src/components/layout';
import { GlobalStyle, theme } from './src/theme/global-style';

import 'bootstrap/dist/css/bootstrap.min.css';

export const WrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
);

// export const onInitialClientRender = () => {
//   console.log("this is the setimoute functionworking")
//   setTimeout(function () {
//     document.getElementById("___loader").style.display = "none"
//   }, 1000)
// }
