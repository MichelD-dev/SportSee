import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

html{
    min-height:100%;
    position:relative;
}
body {
    height:100%;
    font-family: 'Roboto', sans-serif;
}
#root {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    /* overflow:hidden; */
}
`

export default GlobalStyle
