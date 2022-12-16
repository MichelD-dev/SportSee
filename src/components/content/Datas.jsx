import {Navigate, useParams} from 'react-router-dom'
import {useFetch} from '../../api/api'
import Grid from '../grid/Grid'
import * as S from './Content.elements'
import Greetings from './greetings/Greetings'

const Datas = () => {
  const {id} = useParams()

  const {response, loading, error} = useFetch(
    import.meta.env.MODE === 'development'
      ? ['/user', '/session', '/average', '/perf']
      : [
          `/user/${id}`,
          `/user/${id}/activity`,
          `/user/${id}/average-sessions`,
          `/user/${id}/performance`,
        ],
  )
  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <Navigate to="/error404" replace={true} />}

      {response && (
        <S.Datas>
          <Greetings
            userName={
              response.user.id === +id ? response.user.userInfos.firstName : ''
            }
          />
          <Grid datas={response.user.id === +id ? response : null} />
        </S.Datas>
      )}
    </>
  )
}

export default Datas
