import PropTypes from 'prop-types'
import {StyledGreetings} from './Greetings.elements'

/**
 * Displays a greeting message.
 *
 * @param {Object} props - The props passed to the component.
 * @param {string} props.userName - The name of the user to greet.
 * @returns {JSX.Element} - A JSX element containing a greeting message.
 */
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
