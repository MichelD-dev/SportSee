import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
  flex-grow: 2;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  transition: 0.2s all ease-out;
  &:hover {
    color: ${({theme}) => theme.colors.secondary};
  }
`
