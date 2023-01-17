import {Button1, Button2, Button3, Button4} from '@/components/buttons'
import {StyledAside, Copyright, Container} from './Aside.elements'

/**
 * Displays a navigation sidebar.
 *
 * @returns {JSX.Element} - A JSX element containing buttons and a copyright notice.
 */
const Aside = () => (
  <StyledAside>
    <Container>
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Copyright>Copyright, SportSee {new Date().getFullYear()}</Copyright>
    </Container>
  </StyledAside>
)

export default Aside
