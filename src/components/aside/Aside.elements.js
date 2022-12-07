import styled from 'styled-components'

export const StyledAside = styled.aside`
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: start;
  height: 100vh;
  margin-top: 22vh;
`

export const Copyright = styled.p`
  font-size: 0.8rem;
  transform: rotate(-90deg);
  color: #fff;
  position: absolute;
  bottom: 13vh;
  left: -22px;
  width: 150px;
`
