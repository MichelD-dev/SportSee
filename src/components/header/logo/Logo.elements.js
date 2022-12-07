import styled from 'styled-components'
import Input from '../../../utils/GenericInput'

export const StyledLogo = styled.div`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 50%;
  height: 57px;
  aspect-ratio: 1 / 1;
  margin: 19px 10px 14px 29px;
  cursor: pointer;
  position: relative;
`

export const LogoPersonaHead = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/logo-head.svg',
})`
  position: absolute;
  right: 12px;
  top: 5px;
`

export const LogoPersonaBody = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/logo-body.svg',
})`
  position: absolute;
  bottom: 0;
`

export const LogoTitle = styled.h1`
  color: ${({theme}) => theme.colors.secondary};
`
