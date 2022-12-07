import styled from 'styled-components'

export const StyledAside = styled.aside`
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  padding-top: 150px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
`

export const Copyright = styled.p`
  font-size: 0.8rem;
  transform: rotate(-90deg);
  color: #fff;
  position: absolute;
  bottom: -10px;
  left: -22px;
  width: 150px;
`
