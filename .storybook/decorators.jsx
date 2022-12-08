import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../src/globalStyle'
import {theme} from '../src/App'

export const withThemeAndGlobalStyle = Story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
)

export const globalDecorators = [withThemeAndGlobalStyle]
