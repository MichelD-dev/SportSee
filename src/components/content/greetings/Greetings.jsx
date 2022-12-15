import {StyledGreetings} from '../Content.elements'
import {useFetch} from '../../../api/api'
import {useParams} from 'react-router-dom'
// import {useEffect} from 'react'

const Greetings = () => {
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

  // useEffect(() => console.log(response), [response])

  const userName =
    response?.user?.id === +id ? response?.user.userInfos.firstName : ''

  return (
    <StyledGreetings>
      <h1>
        Bonjour <span>{response ? userName : 'invité'}</span>
      </h1>
      {response && (
        <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
      )}
    </StyledGreetings>
  )
}

export default Greetings
