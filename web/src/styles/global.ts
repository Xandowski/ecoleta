import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
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
  }

  main {
    display: flex;
    min-height: 100vh;
  }

  h1, h2, h3 {
    font-family: ${({theme}) => theme.fonts.title};
    font-weight: 700;
  }
  
  p, label, a, select {
    font-family: ${({theme}) => theme.fonts.text};
    font-weight: 400;
  }
`