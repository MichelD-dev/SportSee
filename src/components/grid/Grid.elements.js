import styled from 'styled-components'
import Input from '../../utils/GenericInput'

export const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1.6rem;
  width: 100%;
  color: #74798c;
  * {
    border-radius: 5px;
  }
`

export const Graphs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3vh;
  > div:first-child {
    background-color: ${({theme}) => theme.colors.tertiary};
  }
`

export const StyledActivity = styled.div`
  padding: 30px;
  grid-column: 1 / 4;
  flex-grow: 2;
`
export const Sessions = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: space-between;
  > div {
    background-color: ${({theme}) => theme.colors.tertiary};
    width: 30%;
    aspect-ratio: 1 / 1;
  }
`

export const StyledDuration = styled.div``

export const StyledIntensity = styled.div``

export const StyledScore = styled.div``

export const Ratios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5vh;
  > div {
    background-color: ${({theme}) => theme.colors.tertiary};
    display: flex;
    justify-content: start;
    align-items: center;
    aspect-ratio: 1 / 0.5;
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
  padding: 2vh;
`

export const ProteinIcon = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/protein-icon.svg',
})`
  padding: 2vh;
`

export const CarbsIcon = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/carbs-icon.svg',
})`
  padding: 2vh;
`

export const FatIcon = styled(Input).attrs({
  type: 'image',
  alt: '',
  src: '../media/fat-icon.svg',
})`
  padding: 2vh;
`
