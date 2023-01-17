import {Logo, Navbar} from '@/components/index'
import {StyledHeader} from './Header.elements'

/**
 * * Header is a component that renders the header of the application. It consists of the SportSee logo and the main navigation bar.
 *
 * The Header component includes two nested components: `Logo` and `Navbar`. These components render the logo and navigation bar, respectively. The `StyledHeader` component is used to style the header as a whole.
 *
 * @return {ReactElement} The JSX markup for the Header component
 */
const Header = () => (
  <StyledHeader>
    <Logo />
    <Navbar />
  </StyledHeader>
)

export default Header
