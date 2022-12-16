import Aside from '../aside/Aside'
import * as S from './Content.elements'
import {AxiosInstanceProvider} from '../../context/apiContext'
import Datas from './Datas'

const Content = () => {
  return (
    <S.Section>
      <Aside />
      <AxiosInstanceProvider
        config={{
          baseURL:
            import.meta.env.MODE === 'development'
              ? import.meta.env.VITE_MOCKED_DATA
              : import.meta.env.VITE_SERVER_DATA,
        }}
      >
        <Datas />
      </AxiosInstanceProvider>
    </S.Section>
  )
}

export default Content
