import {Nav, StyledLink, Ul} from './Navbar.elements'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Snackbar from '../../snackbar/Snackbar'

const Navbar = () => {
  const [user, setUser] = useState({id: ''})
  const [isUser, setIsUser] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    navigate(user.id ? `user/${user.id}` : '/')
  }, [user])

  const handleClick = () => {
    const userId = localStorage.getItem('userId')
    setUser({id: userId})
    setIsUser(userId ? 'yes' : 'no')
    setTimeout(() => setIsUser(userId === 'no' && ''), 2000)
  }

  return (
    <Nav>
      <Ul>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink onClick={handleClick}>Profil</StyledLink>
        <StyledLink to={'/settings'}>Réglage</StyledLink>
        <StyledLink to={'/Community'}>Communauté</StyledLink>
      </Ul>
      {isUser === 'no' && <Snackbar />}
    </Nav>
  )
}

export default Navbar
