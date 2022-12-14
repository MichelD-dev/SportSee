import Aside from '../aside/Aside'
import * as S from './Content.elements'
import Greetings from './greetings/Greetings'
import Grid from '../grid/Grid'
import {AxiosInstanceProvider} from '../../context/apiContext'

const Content = () => {
  return (
    <S.Section>
      <Aside />
      <AxiosInstanceProvider config={{baseURL: 'http://localhost:4001'}}>
        <S.Datas>
          <Greetings />
          <Grid />
        </S.Datas>
      </AxiosInstanceProvider>
    </S.Section>
  )
}

export default Content
