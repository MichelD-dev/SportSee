import {StyledIntensity} from './Grid.elements'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
} from 'recharts'

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

const fromLowerToUpperCase = str => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
}

const reFormatDatas = obj => {
  return obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = englishToFrench(obj.kind[key + 1])
      nbrKind.kind = fromLowerToUpperCase(frenchDatas)
    }
    return nbrKind
  })
}

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
