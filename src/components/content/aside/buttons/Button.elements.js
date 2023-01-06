import styled from 'styled-components'

const Button = styled.svg.attrs({
  width: '64',
  height: '64',
  viewBox: '0 0 64 64',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
})``

const Svg = styled(Button)`
  height: 65px;
  aspect-ratio: 1 / 1;
  cursor: pointer;
`
export default Svg
