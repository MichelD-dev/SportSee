import {Nav, StyledLink, Ul} from './Navbar.elements'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Snackbar from '../../snackbar/Snackbar'

/**
 * Navbar is a component that renders the main navigation bar for the application. It displays a list of links that allow the user to navigate to different pages within the application.
 *
 * The Navbar component maintains state for the current user and a flag indicating whether the user is logged in or not. It uses the `useState` hook to initialize these values and the `useEffect` hook to navigate to the appropriate page based on the current user.
 *
 * The Navbar component also includes a `handleClick` function that is called when the user clicks on the "Profil" link. This function retrieves the user's ID from local storage and updates the component's state accordingly. If the user is not logged in, a snackbar is displayed to alert the user.
 *
 * @return {ReactElement} The JSX markup for the Navbar component
 */
const Navbar = () => {
  const [user, setUser] = useState({id: ''})
  const [showSnackbar, setShowSnackbar] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    navigate(user.id ? `user/${user.id}` : '/')
  }, [user])

  const handleClick = () => {
    const userId = localStorage.getItem('userId')
    /**
     * Sets the current user's ID.
     *
     * @param {string} id - The user's ID
     */
    setUser({id: userId})
    /**
     * Sets a flag indicating the snackbar should be displayed when there's no userId.
     *
     * @param {boolean} show - Whether the snackbar should be displayed
     */
    setShowSnackbar(!userId)
    /**
     * Sets a timeout to set the snackbar impossible to be called again during 2s.
     *
     * @param {function} callback - The function to call when the timeout is finished
     * @param {number} delay - The amount of time in milliseconds to wait before calling the callback function
     */
    setTimeout(() => setShowSnackbar(false), 2000)
  }

  return (
    <Nav>
      <Ul>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink onClick={handleClick}>Profil</StyledLink>
        <StyledLink to={'/settings'}>Réglage</StyledLink>
        <StyledLink to={'/Community'}>Communauté</StyledLink>
      </Ul>
      {showSnackbar && <Snackbar />}
    </Nav>
  )
}

export default Navbar

//FIXME clck sur card puis click sur profil...
