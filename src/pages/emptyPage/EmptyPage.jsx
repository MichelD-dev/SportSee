import Aside from '@/components/aside/Aside'
import * as S from '@/components/content/Content.elements'

/**
 * EmptyPage is a component that displays an empty page with a sidebar.
 * @return {ReactElement} The JSX markup for the EmptyPage component
 */
const EmptyPage = () => {
  return (
    <S.Section>
      <Aside />
    </S.Section>
  )
}

export default EmptyPage
