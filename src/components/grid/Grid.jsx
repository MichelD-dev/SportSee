import * as S from './Grid.elements'
import {useParams} from 'react-router-dom'
// import {useEffect} from 'react'
import {useFetch} from '../../api/api'
import {Activity} from './Activity'
import {Duration} from './Duration'
import {Intensity} from './Intensity'
import {Score} from './Score'

const Grid = () => {
  const {id} = useParams()

  const {response} = useFetch(
    import.meta.env.MODE === 'development'
      ? ['/user', '/session', '/average', '/perf']
      : [
          `/user/${id}`,
          `/user/${id}/activity`,
          `/user/${id}/average-sessions`,
          `/user/${id}/performance`,
        ],
  )

  // useEffect(() => {
  //   console.log(response)
  // }, [response])
  // useEffect(() => console.log(error), [error])

  return response ? (
    <S.StyledGrid>
      <S.Graphs>
        <Activity data={response.session.sessions} />
        <S.Sessions>
          <Duration data={response.average.sessions} />
          <Intensity data={response.perf} />
          <Score data={response.user} />
        </S.Sessions>
      </S.Graphs>
      <S.Ratios>
        <div>
          <S.CaloriesIcon />
          <div>
            <p>{response.user.keyData.calorieCount}kCal</p>
            <p>Calories</p>
          </div>
        </div>
        <div>
          <S.ProteinIcon />
          <div>
            <p>{response.user.keyData.proteinCount}g</p>
            <p>Proteines</p>
          </div>
        </div>
        <div>
          <S.CarbsIcon />
          <div>
            <p>{response.user.keyData.carbohydrateCount}g</p>
            <p>Glucides</p>
          </div>
        </div>
        <div>
          <S.FatIcon />
          <div>
            <p>{response.user.keyData.lipidCount}g</p>
            <p>Lipides</p>
          </div>
        </div>
      </S.Ratios>
    </S.StyledGrid>
  ) : null
}

export default Grid
