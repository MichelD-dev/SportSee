import {Aside, Datas} from '@/components/index'
import {AxiosInstanceProvider} from '@/context/apiContext'
import * as S from './Content.elements'

/**
 * Content is a component that renders the main content of the page.
 *
 * @return {ReactElement} The JSX markup for the Content component
 */
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
