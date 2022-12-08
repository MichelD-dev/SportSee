import {Duration} from '../Grid.elements'
import PropTypes from 'prop-types'
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default {
  title: 'Datas/Sessions',
  component: Duration,
  tags: ['docsPage'],
}

const HandleFormatTick = numDay => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  return days[numDay - 1]
}

const CustomCursor = prop => {
  const {width, points} = prop
  const X = points[0].x
  const Y = points[0].y

  return (
    <Rectangle
      width={width}
      height={1000}
      x={X}
      y={Y}
      style={{background: 'red', opacity: 0.1}}
    />
  )
}

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

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return <ul>{TooltipText(payload)}</ul>
  }
}

export const SessionsData = (args, {loaded: {datas}}) => {
  return (
    <Duration style={{height: '300px', width: '450px'}} {...args}>
      <h2
        style={{
          fontSize: '1.6rem',
          fontWeight: '700',
          color: '#ffffff9b',
          backgroundColor: 'red',
          borderRadius: '10px 10px 0 0',
          padding: '40px 150px 0 50px',
          lineHeight: '2.8rem',
        }}
      >
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer>
        <LineChart
          data={datas.sessions}
          style={{background: 'red', borderRadius: '0 0 10px 10px'}}
          margin={{top: 0, right: 30, bottom: 40, left: 30}}
        >
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{r: 8}}
            unit={'min'}
            stroke={'#ffffffd1'}
            strokeWidth={4}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{strokeWidth: 0, r: 20}}
            stroke={'#eee'}
          />
          <YAxis hide domain={['dataMin - 15', 'dataMax + 10']} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={HandleFormatTick}
            stroke={'#eee'}
            width={5}
            style={{fontWeight: 'bolder'}}
          />
          <Tooltip
            wrapperStyle={{
              background: '#FFF',
              color: '#000',
              width: '75px',
              height: '45px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              outline: 'none',
            }}
            labelStyle={{display: 'none', border: 'none'}}
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
        </LineChart>
      </ResponsiveContainer>
    </Duration>
  )
}

SessionsData.loaders = [
  async () => ({
    datas: await (await fetch('http://localhost:4001/average')).json(),
  }),
]

SessionsData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    }),
  ),
  loaded: PropTypes.object,
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
}
