/* eslint-disable react/no-unescaped-entities */
import {Link} from 'react-router-dom'
import {StyledError404} from './Error404.elements'

const Error404 = () => (
  <StyledError404>
    <div>404</div>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retourner sur la page d'accueil</Link>
  </StyledError404>
)

export default Error404
