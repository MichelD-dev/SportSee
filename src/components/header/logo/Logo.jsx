import React from 'react'
import {
  LogoPersonaBody,
  LogoPersonaHead,
  LogoTitle,
  StyledLogo,
} from './Logo.elements'

const Logo = () => {
  return (
    <>
      <StyledLogo>
        <LogoPersonaHead />
        <LogoPersonaBody />
      </StyledLogo>
      <LogoTitle>SportSee</LogoTitle>
    </>
  )
}

export default Logo
