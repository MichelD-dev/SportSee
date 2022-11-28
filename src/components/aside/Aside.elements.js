import styled from 'styled-components'

export const StyledAside = styled.aside`
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 100vh;
  position: relative
  bottom: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 30%;
`

export const Copyright = styled.p`
  font-size: 0.7rem;
  transform: rotate(-90deg);
  color: #fff;
  position: absolute;
  bottom: 130px;
  left: -17px;
  width: 150px;
`
