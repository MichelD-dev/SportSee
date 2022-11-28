import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyle'
import * as S from './components/index'
import Content, {GreetingSection} from './components/content/Content.elements'

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
      <Content>
        <S.Aside />
        <GreetingSection>
          <h1>Bonjour Thomas</h1>
        </GreetingSection>
      </Content>
    </ThemeProvider>
  )
}

export default App
