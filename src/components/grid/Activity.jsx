import {StyledActivity} from './Grid.elements'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import PropTypes from 'prop-types'

const TooltipText = payload => {
  if (typeof payload[0].unit !== 'undefined') {
    return (
      <p>
        {payload[0].value} {payload[0].unit}
      </p>
    )
  }
  if (payload && payload.length) {
    return payload.map((prop, id) => {
      return prop.dataKey === 'calories' ? (
        <li key={id}>{prop.value}kCal</li>
      ) : (
        <li key={id}>{prop.value}Kg</li>
      )
    })
  }

  return ''
}

const CustomTooltip = ({active, payload}) =>
  active && payload && payload.length && <ul>{TooltipText(payload)}</ul>

const CustomizedAxisTick = ({payload, x, y}) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={25} fill="#999">
      {Number(payload.value.slice(8))}
    </text>
  </g>
)

export const Activity = ({data}) => {
  return (
    <StyledActivity>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tick={CustomizedAxisTick} />
          <YAxis
            orientation="right"
            axisLine={false}
            allowDecimals={false}
            yAxisId={1}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <YAxis hide dataKey={'calories'} yAxisId={2} />
          <Tooltip
            content={CustomTooltip}
            offset={40}
            wrapperStyle={{
              color: '#FFF',
              background: 'red',
              border: 'none',
              outline: 'none',
              width: '55px',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              lineHeight: '2.8rem',
              fontSize: '.7rem',
            }}
          />
          <text dy={+20} width={200}>
            Activité quotidienne
          </text>
          <Legend
            height={40}
            verticalAlign="top"
            align="right"
            iconType={'circle'}
          />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            radius={[7, 7, 0, 0]}
            barSize={7}
            name={'Poids (kg)'}
            yAxisId={1}
          />
          <Bar
            yAxisId={2}
            dataKey="calories"
            fill="#e60000"
            barSize={7}
            radius={[7, 7, 0, 0]}
            name={'Calories brûlées (kCal)'}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledActivity>
  )
}

TooltipText.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.object),
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
}

CustomizedAxisTick.propTypes = {
  payload: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
}

Activity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    }),
  ),
}
