import {StyledScore} from './Grid.elements'
import PropTypes from 'prop-types'
import {ResponsiveContainer, RadialBarChart, RadialBar} from 'recharts'

export const Score = ({data}) => {
  const datas = []
  datas.push(data)
  // console.log(datas)
  const dataValue = 360 * datas[0].todayScore
  const style = {
    background: '#fff',
    fill: 'red',
  }

  return (
    <StyledScore>
      <ResponsiveContainer>
        {/* <RadialBarChart
          width={159.38}
          height={159.38}
          startAngle={0}
          endAngle={datas[0].todayScore}
          innerRadius={87}
          outerRadius={87}
          barSize={10}
          data={datas}
          margin={{top: 0, right: 0, bottom: 0, left: 0}}
        > */}
        <RadialBarChart
          // width={500}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          startAngle={-180}
          endAngle={-180 + -dataValue}
          data={datas}
          // style={{background: 'transparent'}}
        >
          <text x="10%" y="15%" fontSize={14} fontWeight={500}>
            Score
          </text>
          <text textAnchor="middle" fontSize={16} fontWeight={500}>
            <tspan x="50%" y="50%" fontSize={26} fontWeight="bold">
              {`${datas[0].todayScore * 100}%`}
            </tspan>
            <tspan x="50%" y="62.5%">
              de votre
            </tspan>
            <tspan x="50%" y="74%">
              objectif
            </tspan>
          </text>
          <RadialBar dataKey={'todayScore'} style={style} cornerRadius={5} />
        </RadialBarChart>
      </ResponsiveContainer>
    </StyledScore>
  )
}

Score.propTypes = {
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
}
