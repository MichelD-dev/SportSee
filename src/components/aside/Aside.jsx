import {StyledAside, Copyright, Container} from './Aside.elements'
import Button1 from './buttons/Button1'
import Button2 from './buttons/Button2'
import Button3 from './buttons/Button3'
import Button4 from './buttons/Button4'

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
