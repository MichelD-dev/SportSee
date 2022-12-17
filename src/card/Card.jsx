import {StyledCard} from '../pages/home/Home.elements'
import PropTypes from 'prop-types'

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
