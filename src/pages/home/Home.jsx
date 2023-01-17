import Card from '@/components/card/Card'
import {StyledHome} from './Home.elements'

/**
 * Home is a component that displays user cards on the homepage.
 *
 * The Home component includes one 'Card' component displayed in any cases, and a conditional
 * rendering of a second `Card` component, only rendered in production mode, as indicated by
 * the `import.meta.env.MODE === 'production'` condition.
 *
 * @component
 *
 * @return {ReactElement} The JSX markup for the Home component
 */
const Home = () => {
  return (
    <StyledHome>
      <Card link={'/user/12'}>
        <figure>
          <img src="../media/erik-lucatero-d2MSDujJl2g-unsplash.jpg" alt="" />
          <figcaption>Karl</figcaption>
        </figure>
      </Card>
      {import.meta.env.MODE === 'production' && (
        <Card link={'/user/18'}>
          <figure>
            <img src="../media/jake-nackos-IF9TK5Uy-KI-unsplash .jpg" alt="" />
            <figcaption>Cecilia</figcaption>
          </figure>
        </Card>
      )}
    </StyledHome>
  )
}

export default Home
