import * as S from './Grid.elements'
import {Activity} from './Activity'
import {Duration} from './Duration'
import {Intensity} from './Intensity'
import {Score} from './Score'
import PropTypes from 'prop-types'

const Grid = ({datas}) => {
  console.log(datas)
  return datas ? (
    <S.StyledGrid>
      <S.Graphs>
        <Activity data={datas.session.sessions} />
        <S.Sessions>
          <Duration data={datas.average.sessions} />
          <Intensity data={datas.perf} />
          <Score data={datas.user} />
        </S.Sessions>
      </S.Graphs>
      <S.Ratios>
        <div>
          <S.CaloriesIcon />
          <div>
            <p>{datas.user.keyData.calorieCount}kCal</p>
            <p>Calories</p>
          </div>
        </div>
        <div>
          <S.ProteinIcon />
          <div>
            <p>{datas.user.keyData.proteinCount}g</p>
            <p>Proteines</p>
          </div>
        </div>
        <div>
          <S.CarbsIcon />
          <div>
            <p>{datas.user.keyData.carbohydrateCount}g</p>
            <p>Glucides</p>
          </div>
        </div>
        <div>
          <S.FatIcon />
          <div>
            <p>{datas.user.keyData.lipidCount}g</p>
            <p>Lipides</p>
          </div>
        </div>
      </S.Ratios>
    </S.StyledGrid>
  ) : null
}

Grid.propTypes = {
  datas: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number,
      userInfos: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number,
      }),
      todayScore: PropTypes.number,
      keyData: PropTypes.shape({
        calorieCount: PropTypes.number,
        proteinCount: PropTypes.number,
        carbohydrateCount: PropTypes.number,
        lipidCount: PropTypes.number,
      }),
    }),
    perf: PropTypes.object,
    session: PropTypes.object,
    average: PropTypes.object,
  }),
}

export default Grid
