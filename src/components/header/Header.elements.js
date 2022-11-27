import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 1.5rem;
`
