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
 * Translates an English word to French.
 *
 * @param {string} str - The English word to translate.
 * @returns {string} - The French translation of the word.
 */
const englishToFrench = str => {
  const words = {
    energy: 'énergie',
    strength: 'force',
    speed: 'vitesse',
    intensity: 'intensité',
    cardio: 'cardio',
    endurance: 'endurance',
  }
  return words[str]
}

englishToFrench.propTypes = {
  str: PropTypes.string,
}

/**
 * Converts a string to title case.
 *
 * @param {string} str - The string to convert.
 * @returns {string} - The string in title case.
 */
const fromLowerToUpperCase = str => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
}

fromLowerToUpperCase.propTypes = {
  str: PropTypes.string,
}

/**
 * Reformats data by translating the 'kind' property to French and converting it to title case.
 *
 * @param {Object} obj - The data to reformat.
 * @param {number} obj.userId - The ID of the user.
 * @param {Array} obj.data - An array of objects containing a 'kind' and a 'value' property.
 * @param {Object} obj.kind - An object with keys corresponding to the 'kind' properties in the 'data' array.
 * @returns {Array} - The reformatted data.
 */
const reFormatDatas = obj => {
  return obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = englishToFrench(obj.kind[key + 1])
      nbrKind.kind = fromLowerToUpperCase(frenchDatas)
    }
    return nbrKind
  })
}

reFormatDatas.propTypes = {
  obj: PropTypes.shape({
    userId: PropTypes.number,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        kind: PropTypes.string,
      }),
    ),
    kind: PropTypes.objectOf(PropTypes.string),
  }),
}

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
  const datas = reFormatDatas(data)

  return (
    <StyledIntensity>
      <ResponsiveContainer>
        <RadarChart
          outerRadius={70}
          data={datas}
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
            fontSize={12}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </StyledIntensity>
  )
}

Intensity.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.object),
  }),
}
