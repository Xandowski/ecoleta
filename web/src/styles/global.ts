import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body{
    height: 100vh;
  }
  a {
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    /* overflow-y: hidden; */
    div{
      height: 100vh;
      overflow: auto;
      /* overflow-y: hidden; */
    }
  }
`