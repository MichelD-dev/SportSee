import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyle'
import * as S from './components/index'
import {Outlet} from 'react-router-dom'

export const theme = {
  colors: {
    primary: '#000',
    secondary: '#e60000',
    tertiary: '#fbfbfb',
    // tertiary: '#cecece',
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
