import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyle'
import * as S from './components/index'

const theme = {
  colors: {
    primary: '#000',
    secondary: '#e60000',
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.Header />
    </ThemeProvider>
  )
}

export default App
