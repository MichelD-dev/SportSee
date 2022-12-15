import {StyledScore} from './Grid.elements'
import PropTypes from 'prop-types'
import {ResponsiveContainer, RadialBarChart, RadialBar} from 'recharts'

export const Score = ({data}) => {
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

Score.propTypes = {
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
}
