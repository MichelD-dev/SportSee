import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
   0%  {
    opacity: 0;
  }
  10% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  
  100% {
    opacity: 0;
  }
  `

export const StyledSnackbar = styled.div`
  background: #3282f7;
  width: 300px;
  color: white;
  padding: 26px 35px;
  position: fixed;
  text-align: center;
  top: 120px;
  right: 40px;
  border-radius: 5px;
  font-size: 1.2rem;
  z-index: 1;
  animation: ${fadeIn} 2s forwards;
`
