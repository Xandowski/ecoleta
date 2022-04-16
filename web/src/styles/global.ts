import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;

    div{
      height: 100vh;
    }
  }
`