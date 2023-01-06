import {Navigate, useParams} from 'react-router-dom'
import {useFetch} from '../../../api/api'
import Grid from './grid/Grid'
import Greetings from './greetings/Greetings'
import {StyledDatas} from './Datas.elements'
import PropTypes from 'prop-types'

/**
 * A component that displays data about a user.
 * @return {ReactElement} The component.
 */
const Datas = () => {
  const {id} = useParams()

  /**
   * A custom hook that fetches data from an API.
   * @param {Array} endpoints - An array of strings containing the API endpoints to be fetched.
   * @return {Object} An object containing the following properties:
   * response: the response data from the API.
   * loading: a boolean indicating whether the data is still being fetched.
   * error: a string containing an error message if there was an error during the fetch.
   * cancel: a function that can be called to cancel the fetch.
   */

  const {response, loading, error} = useFetch(
    import.meta.env.MODE === 'development'
      ? ['/user', '/session', '/average', '/perf']
      : [
          `/user/${id}`,
          `/user/${id}/activity`,
          `/user/${id}/average-sessions`,
          `/user/${id}/performance`,
        ],
  )

  /**
   * A variable that stores data about a user if the id in the response data matches the id in the URL parameters.
   * @type {object|null}
   */
  const userDatas = response?.user.id === +id ? response : null

  /**
   * A variable that stores the name of a user if the id in the response data matches the id in the URL parameters.
   * @type {string}
   */
  const userName =
    response?.user.id === +id ? response.user.userInfos.firstName : ''

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <Navigate to="/error404" replace={true} />}

      {userDatas && (
        <StyledDatas>
          <Greetings userName={userName} />
          <Grid
            session={userDatas.session}
            average={userDatas.average}
            perf={userDatas.perf}
            user={userDatas.user}
          />
        </StyledDatas>
      )}
    </>
  )
}

Datas.propTypes = {
  id: PropTypes.string,
  response: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number,
      userInfos: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number,
      }),
      todayScore: PropTypes.number,
      score: PropTypes.number,
      keyData: PropTypes.objectOf(PropTypes.number),
    }),
    session: PropTypes.shape({
      userId: PropTypes.number,
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string,
          kilogram: PropTypes.number,
          calories: PropTypes.number,
        }),
      ),
    }),
    average: PropTypes.shape({
      userId: PropTypes.number,
      sessions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
    }),
    perf: PropTypes.shape({
      userId: PropTypes.number,
      kind: PropTypes.objectOf(PropTypes.string),
      data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
    }),
  }),
  loading: PropTypes.bool,
  error: PropTypes.string,
}

export default Datas
