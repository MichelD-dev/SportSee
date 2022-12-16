import {StyledGreetings} from '../Content.elements'
import PropTypes from 'prop-types'

const Greetings = ({userName}) => {
  return (
    <StyledGreetings>
      <h1>
        Bonjour <span>{userName}</span>
      </h1>

      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </StyledGreetings>
  )
}

Greetings.propTypes = {
  userName: PropTypes.string,
}

export default Greetings
