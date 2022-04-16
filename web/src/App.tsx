import Index from './pages/index'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light'
import {AppRoutes} from './Routes'

function App() {

  return (
    <ThemeProvider theme={light}>
        <GlobalStyles />
        <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
