import Card from '../../card/Card'
import {StyledHome} from './Home.elements'

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
