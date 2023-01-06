import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyle'
import * as S from './components/index'
import {Outlet} from 'react-router-dom'

/**
 * @typedef {Object} Theme
 * @property {Object} colors - An object containing color values for different parts of the UI.
 * @property {string} colors.primary - The primary color of the UI.
 * @property {string} colors.secondary - The secondary color of the UI.
 * @property {string} colors.tertiary - The tertiary color of the UI.
 */

/**
 * A theme object containing color values for different parts of the UI.
 * @type {Theme}
 */
export const theme = {
  colors: {
    primary: '#000',
    secondary: '#e60000',
    tertiary: '#fbfbfb',
    // tertiary: '#080404',
  },
}

/**
 * A functional component representing the root of the app.
 * @author Michel DELAUNAY
 * @see <a href="https://github.com/MichelD-dev/SportSee" target="_blank">SportSee repository github</a>
 * @returns {JSX.Element} - The JSX element representing the app.
 */
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
