import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
`

export const Datas = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 60px 120px 120px;
`

export const StyledGreetings = styled.div`
  font-size: 1.2rem;
  align-self: start;
  height: 170px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 2.8rem;
    font-weight: 400;
    span {
      color: ${({theme}) => theme.colors.secondary};
    }
  }
`
