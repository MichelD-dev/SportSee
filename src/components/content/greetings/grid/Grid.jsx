import * as S from './Grid.elements'
// import {useEffect} from 'react'
import {useFetch} from '../../../../api/api'

const Grid = () => {
  const {response} = useFetch('/user', '/session', '/average', '/perf')

  // useEffect(() => {
  //   console.log(response?.user.keyData)
  // }, [response?.user])
  // useEffect(() => console.log(error), [error])

  return (
    <S.StyledGrid>
      <S.Graphs>
        <S.Activity data={response?.session.sessions}></S.Activity>
        <S.Duration>Duration</S.Duration>
        <S.Intensity>Intensity</S.Intensity>
        <S.Score>Score</S.Score>
      </S.Graphs>
      <S.Ratios>
        <div>
          <S.CaloriesIcon />
          <div>
            <p>{response?.user.keyData.calorieCount}kCal</p>
            <p>Calories</p>
          </div>
        </div>
        <div>
          <S.ProteinIcon />
          <div>
            <p>{response?.user.keyData.proteinCount}g</p>
            <p>Proteines</p>
          </div>
        </div>
        <div>
          <S.CarbsIcon />
          <div>
            <p>{response?.user.keyData.carbohydrateCount}g</p>
            <p>Glucides</p>
          </div>
        </div>
        <div>
          <S.FatIcon />
          <div>
            <p>{response?.user.keyData.lipidCount}g</p>
            <p>Lipides</p>
          </div>
        </div>
      </S.Ratios>
    </S.StyledGrid>
  )
}

export default Grid
