import * as S from './Grid.elements'
import {Activity} from './activity/Activity'
import {Duration} from './duration/Duration'
import {Intensity} from './intensity/Intensity'
import {Score} from './score/Score'
import PropTypes from 'prop-types'

/**

A component that displays a grid of data and graphs.
@param {Object} props - The props passed to the component.
@param {Object} props.user - An object containing data about the user.
@param {number} props.user.id - The ID of the user.
@param {Object} props.user.userInfos - An object containing the user's first and last name and age.
@param {string} props.user.userInfos.firstName - The user's first name.
@param {string} props.user.userInfos.lastName - The user's last name.
@param {number} props.user.userInfos.age - The user's age.
@param {number} props.user.todayScore - The user's score for today.
@param {number} props.user.score - The user's overall score.
@param {Object} props.user.keyData - An object containing data about the user's key data.
@param {number} props.perf - An object containing data about the user's performance.
@param {number} props.perf.userId - The ID of the user.
@param {Object} props.perf.kind - An object containing the types of data being displayed.
@param {string} props.perf.kind.x - The type of data being displayed on the x-axis.
@param {string} props.perf.kind.y - The type of data being displayed on the y-axis.
@param {Array} props.perf.data - An array of objects containing data to be plotted on the graph.
@param {Object} props.session - An object containing data about the user's sessions.
@param {number} props.session.userId - The ID of the user.
@param {Array} props.session.sessions - An array of objects containing data about the user's sessions.
@param {string} props.session.sessions.day - The day of the session.
@param {number} props.session.sessions.kilogram - The user's weight in kilograms during the session.
@param {number} props.session.sessions.calories - The number of calories burned during the session.
@param {Object} props.average - An object containing data about the average of the user's sessions.
@param {number} props.average.userId - The ID of the user.
@param {Array} props.average.sessions - An array of objects containing data about the average of the user's sessions.
@return {ReactElement} The component.
*/
const Grid = props => {
  const {session, average, perf, user} = props
  // console.log(perf.data[0].kind)
  return props ? (
    <S.StyledGrid>
      <S.Graphs>
        <Activity data={session.sessions} />
        <S.Sessions>
          <Duration data={average.sessions} />
          <Intensity data={perf} />
          <Score data={user} />
        </S.Sessions>
      </S.Graphs>
      <S.Ratios>
        <div>
          <S.CaloriesIcon />
          <div>
            <p>{user.keyData.calorieCount}kCal</p>
            <p>Calories</p>
          </div>
        </div>
        <div>
          <S.ProteinIcon />
          <div>
            <p>{user.keyData.proteinCount}g</p>
            <p>Proteines</p>
          </div>
        </div>
        <div>
          <S.CarbsIcon />
          <div>
            <p>{user.keyData.carbohydrateCount}g</p>
            <p>Glucides</p>
          </div>
        </div>
        <div>
          <S.FatIcon />
          <div>
            <p>{user.keyData.lipidCount}g</p>
            <p>Lipides</p>
          </div>
        </div>
      </S.Ratios>
    </S.StyledGrid>
  ) : null
}

Grid.propTypes = {
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
  }).isRequired,
  perf: PropTypes.shape({
    userId: PropTypes.number,
    kind: PropTypes.objectOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  }).isRequired,
  session: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      }),
    ),
  }).isRequired,
  average: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  }).isRequired,
}

export default Grid
