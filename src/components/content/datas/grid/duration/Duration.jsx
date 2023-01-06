import {StyledDuration} from '../Grid.elements'
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

/**
 * Returns a string representing the day of the week corresponding to a given number.
 *
 * @param {number} numDay - A number representing the day of the week (1-7).
 * @returns {string} - The string representing the day of the week.
 */
const HandleFormatTick = numDay => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  return days[numDay - 1]
}

/**
 * Displays a custom cursor for a chart.
 *
 * @param {Array} points - An array of points containing x and y coordinates.
 * @returns {JSX.Element} - A JSX element representing the custom cursor.
 */
const CustomCursor = ({points}) => {
  const X = points[0].x
  const Y = points[0].y

  return (
    <Rectangle
      width={1000}
      height={1000}
      x={X}
      y={Y - 100}
      style={{background: 'red', opacity: 0.1}}
    />
  )
}

/**
 * Returns a JSX element representing the text to be displayed in a chart's tooltip.
 *
 * @param {Array} payload - An array of objects containing data for the chart.
 * @returns {JSX.Element} - A JSX element representing the text to be displayed in the tooltip.
 */
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

/**
 * Displays a custom tooltip for a chart.
 *
 * @param {Object} props - The props passed to the component.
 * @param {boolean} props.active - Whether or not the tooltip is active.
 * @param {Array} props.payload - An array of objects containing data for the chart.
 * @returns {JSX.Element} - A JSX element representing the custom tooltip.
 */
const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return <ul>{TooltipText(payload)}</ul>
  }
}

const COLOR = '#ffffffa4'

/**
 * Displays a chart showing the duration of sessions.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.data - An array of objects containing data for the chart. Each object should have a `day` property representing the day of the week and a `sessionLength` property representing the duration of the session in minutes.
 * @returns {JSX.Element} - A JSX element containing a `LineChart` element from the `react-vis` library.
 */
export const Duration = ({data}) => {
  return (
    <StyledDuration>
      <ResponsiveContainer>
        <LineChart
          data={data}
          style={{background: 'red', borderRadius: '10px'}}
          margin={{top: 70, right: 20, bottom: 10, left: 20}}
        >
          <text
            x="15%"
            y="15%"
            fontSize={14}
            fontWeight={500}
            width={100}
            fill={COLOR}
          >
            Durée moyenne des
            <tspan x="15%" y="27%">
              sessions
            </tspan>
          </text>
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{r: 4}}
            unit={'min'}
            stroke={COLOR}
            strokeWidth={2}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{strokeWidth: 0, r: 10}}
            stroke={'#ffffff40'}
          />
          <YAxis hide domain={['dataMin - 15', 'dataMax + 10']} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={HandleFormatTick}
            stroke={COLOR}
            fontSize={13}
            fontWeight={100}
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
    </StyledDuration>
  )
}

Duration.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    }),
  ),
}

CustomCursor.propTypes = {
  points: PropTypes.array,
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
}

TooltipText.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.object),
}

HandleFormatTick.propTypes = {
  numDay: PropTypes.number,
}
