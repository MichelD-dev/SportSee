/* eslint-disable react/no-unescaped-entities */
import {Link} from 'react-router-dom'
import {StyledError404} from './Error404.elements'

/**
 * Error404 is a component that displays a 404 error message to the user.
 * It includes a `Link` component to allow the user to return to the homepage.
 * @return {ReactElement} The JSX markup for the Error404 component
 */
const Error404 = () => (
  <StyledError404>
    <div>404</div>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retourner sur la page d'accueil</Link>
  </StyledError404>
)

export default Error404
