import {StyledActivity} from '../Grid.elements'
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

/**
 * Returns a JSX element representing the text to be displayed in a chart's tooltip.
 *
 * @param {Array} payload - An array of objects containing data for the chart. Each object should have a `value` property representing the value of the data and an optional `unit` property representing the unit of the data.
 * @returns {JSX.Element} - A JSX element representing the text to be displayed in the tooltip. If the `unit` property is present in the first object in the `payload` array, the element is a `p` element containing the value and unit. Otherwise, it is a list element containing `li` elements for each object in the `payload` array.
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
      // console.log(`calories-${id}`)
      return prop.dataKey === 'calories' ? (
        <li key={`calories-${id}`}>{prop.value}kCal</li>
      ) : (
        <li key={`calories-${id}`}>{prop.value}Kg</li>
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
 * @returns {JSX.Element} - A JSX element representing the custom tooltip. If the `active` property is `true` and the `payload` array exists and is not empty, the element is a list element containing the text returned by the `TooltipText` function.
 */
const CustomTooltip = ({active, payload}) =>
  active && payload && payload.length && <ul>{TooltipText(payload)}</ul>

/**
 * Displays a custom tick for a chart's axis.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.payload - An object containing data for the tick.
 * @param {number} props.x - The x coordinate of the tick.
 * @param {number} props.y - The y coordinate of the tick.
 * @returns {JSX.Element} - A JSX element representing the custom tick.
 */
const CustomizedAxisTick = ({payload, x, y}) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={25} fill="#999">
      {Number(payload.value.slice(8))}
    </text>
  </g>
)

/**
 * Displays custom names for items in a chart's legend.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.children - The children of the component.
 * @returns {JSX.Element} - A JSX element containing the children with a custom color and margin style applied.
 */
const CustomNames = ({children}) => (
  <span style={{color: '#74798c', margin: '0 10px 0 3px'}}>{children} </span>
)

/**
 * Displays a chart showing daily activity.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.data - An array of objects containing data for the chart. Each object should have a `day` property representing the day of the week and `kilogram` and `calories` properties representing the weight and calories burned, respectively.
 * @returns {JSX.Element} - A JSX element containing a `BarChart` element from the `react-vis` library.
 */
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
              width: '50px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              lineHeight: '2.2rem',
              fontSize: '.5rem',
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
            iconSize={8}
          />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            barSize={7}
            radius={[7, 7, 0, 0]}
            name={<CustomNames>Poids (kg)</CustomNames>}
            yAxisId={1}
          />
          <Bar
            yAxisId={2}
            dataKey="calories"
            fill="#e60000"
            barSize={7}
            radius={[7, 7, 0, 0]}
            name={<CustomNames>Calories brûlées (kCal)</CustomNames>}
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

CustomNames.propTypes = {
  children: PropTypes.node,
}
