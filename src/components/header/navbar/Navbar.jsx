import {Nav, StyledLink, Ul} from './Navbar.elements'

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink to={'user/12'}>Profil</StyledLink>
        <StyledLink to={'settings'}>Réglage</StyledLink>
        <StyledLink to={'Community'}>Communauté</StyledLink>
      </Ul>
    </Nav>
  )
}

export default Navbar
