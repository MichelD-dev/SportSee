import {Nav, StyledLink, Ul} from './Navbar.elements'
import {useParams} from 'react-router-dom'

const Navbar = () => {
  const {id} = useParams()
  const userId =
    id === ('12' || false) && import.meta.env.MODE === 'production'
      ? '18'
      : '12'

  return (
    <Nav>
      <Ul>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink to={`user/${userId}`}>Profil</StyledLink>
        <StyledLink to={'settings'}>Réglage</StyledLink>
        <StyledLink to={'Community'}>Communauté</StyledLink>
      </Ul>
    </Nav>
  )
}

export default Navbar
