import {StyledGreetings} from '../Content.elements'
import {useFetch} from '../../../api/api'
import {useParams} from 'react-router-dom'
// import {useEffect} from 'react'

const Greetings = () => {
  const {id} = useParams()

  const {response} = useFetch('/user')

  // useEffect(() => console.log(response), [response])

  const userName =
    response?.user.id === +id ? response?.user.userInfos.firstName : ''

  return (
    <StyledGreetings>
      <h1>
        Bonjour <span>{userName}</span>
      </h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </StyledGreetings>
  )
}

export default Greetings
