import styled from 'styled-components'

export const Nav = styled.nav`
  flex-grow: 2;
`

export const Ul = styled.ul`
  color: #fff;
  display: flex;
  justify-content: space-around;
`

export const Li = styled.li`
  cursor: pointer;
  transition: 0.2s all ease-out;
  &:hover {
    color: ${({theme}) => theme.colors.secondary};
  }
`
