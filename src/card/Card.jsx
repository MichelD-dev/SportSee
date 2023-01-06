import {StyledCard} from '../pages/home/Home.elements'
import PropTypes from 'prop-types'

/**
 * Card component.
 *
 * Renders a card with a link and some content inside. If the current
 * environment is in development mode and the link is not "12", the
 * default click behavior is prevented. The userId is stored in
 * localStorage when the card is clicked.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.link - The link for the card.
 * @param {Node} props.children - The children nodes to render inside the card.
 *
 * @returns {ReactElement} - The rendered card element.
 *
 * @example
 * <Card link="/users/123">
 *   <p>Click me!</p>
 * </Card>
 */
const Card = ({link, children}) => {
  const handleClick = e => {
    import.meta.env.MODE === 'development' &&
      link.slice(6) !== '12' &&
      e.preventDefault()
    localStorage.setItem('userId', link.slice(6))
  }

  return (
    <StyledCard to={link} onClick={handleClick}>
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
}

export default Card
