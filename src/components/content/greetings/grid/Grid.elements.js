import styled from 'styled-components'
import Input from '../../../../utils/GenericInput'

export const StyledGrid = styled.section`
  flex-grow: 2;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2.5rem;
  width: 100%;
  color: #74798c;
  > * {
    border-radius: 5px;
  }
`

export const Graphs = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  > * {
    background-color: ${({theme}) => theme.colors.tertiary};
  }
`

export const Activity = styled.div`
  padding: 30px;
  grid-column: 1 / 4;
`

export const Duration = styled.div`
  grid-column: 1 / 2;/
`

export const Intensity = styled.div`
  grid-column: 2/ 3;
`
export const Score = styled.div`
  grid-column: 3 / 4;
`

export const Ratios = styled.div`
  display: grid;
  grid-gap: 50px;
  > div {
    background-color: ${({theme}) => theme.colors.tertiary};
    display: flex;
    justify-content: start;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      height: 100%;
    }
    p:first-child {
      color: ${({theme}) => theme.colors.primary};
    }
  }
`

export const CaloriesIcon = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/calories-icon.svg',
})`
  padding: 30px;
`

export const ProteinIcon = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/protein-icon.svg',
})`
  padding: 30px;
`

export const CarbsIcon = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/carbs-icon.svg',
})`
  padding: 30px;
`

export const FatIcon = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/fat-icon.svg',
})`
  padding: 30px;
`
