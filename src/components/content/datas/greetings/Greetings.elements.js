import styled from 'styled-components'

export const StyledGreetings = styled.div`
  font-size: 1.2rem;
  align-self: start;
  height: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 2.3rem;
    font-weight: 400;
    span {
      color: ${({theme}) => theme.colors.secondary};
    }
  }
  p {
    font-size: 1.2rem;
  }
`
