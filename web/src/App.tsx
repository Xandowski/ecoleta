import Index from './pages/index'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light'

function App() {

  return (
    <ThemeProvider theme={light}>
        <GlobalStyles />
        <Index/>
    </ThemeProvider>
  )
}

export default App
