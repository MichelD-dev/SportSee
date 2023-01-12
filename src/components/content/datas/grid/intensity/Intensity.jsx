import {StyledIntensity} from '../Grid.elements'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
} from 'recharts'

/**
 * Displays a radar chart showing intensity data for a user.
 *
 * @param {Object} data - The data to display in the chart.
 * @param {number} data.userId - The ID of the user.
 * @param {Object} data.kind - An object with keys corresponding to the 'kind' properties in the 'data' array.
 * @param {Array} data.data - An array of objects containing a 'kind' and a 'value' property.
 * @returns {JSX.Element} - A JSX element representing the radar chart.
 */
export const Intensity = ({data}) => {
  return (
    <StyledIntensity>
      <ResponsiveContainer>
        <RadarChart
          outerRadius={70}
          data={data}
          style={{background: '#282d30', borderRadius: '10px'}}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            axisLine={false}
            dataKey="kind"
            tickLine={false}
            tick={{
              dy: 4,
              fill: '#fff',
              fontSize: 12,
            }}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </StyledIntensity>
  )
}

Intensity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    }),
  ),
}
