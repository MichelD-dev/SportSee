import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
`

export const Datas = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  margin: 50px 6vw 0;
  /* gap: 30px; */
`

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
