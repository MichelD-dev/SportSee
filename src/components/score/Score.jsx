import {StyledScore} from '@/components/grid/Grid.elements'
import PropTypes from 'prop-types'
import {ResponsiveContainer, RadialBarChart, RadialBar} from 'recharts'

/**
 * Displays a radial bar chart showing the score of a user.
 *
 * @param {Object} data - The data to display in the chart.
 * @param {number} data.id - The ID of the user.
 * @param {Object} data.keyData - An object containing key data for the user.
 * @param {number} data.score - The user's score.
 * @param {Object} data.userInfos - An object containing the user's first name, last name, and age.
 * @param {string} data.userInfos.firstName - The user's first name.
 * @param {string} data.userInfos.lastName - The user's last name.
 * @param {number} data.userInfos.age - The user's age.
 *
 * @returns {JSX.Element} - A JSX element representing the radial bar chart.
 */
const Score = ({data}) => {
  const datas = []
  datas.push(data)
  const dataValue = 360 * (datas[0].todayScore || datas[0].score)
  const userScore = datas[0].todayScore ? 'todayScore' : 'score'

  const style = {
    background: '#fff',
    fill: 'red',
  }

  return (
    <StyledScore>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="65%"
          outerRadius="75%"
          barSize={10}
          startAngle={-180}
          endAngle={-180 + -dataValue}
          data={datas}
        >
          <text x="10%" y="15%" fontSize={14} fontWeight={500}>
            Score
          </text>
          <text textAnchor="middle" fontSize={15} fontWeight={500}>
            <tspan x="50%" y="50%" fontSize={22}>
              {`${(datas[0].todayScore || datas[0].score) * 100}%`}
            </tspan>
            <tspan x="50%" y="65.5%" fill={'#74798c'}>
              de votre
            </tspan>
            <tspan x="50%" y="77%" fill={'#74798c'}>
              objectif
            </tspan>
          </text>
          <RadialBar dataKey={userScore} style={style} cornerRadius={5} />
        </RadialBarChart>
      </ResponsiveContainer>
    </StyledScore>
  )
}

export default Score

Score.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    keyData: PropTypes.objectOf(PropTypes.number),

    score: PropTypes.number,
    userInfos: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
    }),
  }),
}
