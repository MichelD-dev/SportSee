import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const StyledHome = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 25vh;
  gap: 10%;
`
export const StyledCard = styled(Link)`
  box-shadow: 1px 1px 10px #ddd;
  border-radius: 10px;
  width: 400px;
  height: 200px;
  background-color: ${({theme}) => theme.colors.tertiary};
  text-decoration: none;
  &:hover {
    transition: all 0.15s linear;
    transform: scale(1.01);
    box-shadow: 4px 4px 10px #ddd;
  }
  &:active {
    transform: scale(1);
    box-shadow: 1px 1px 10px #ddd;
    transition: all 0.05s linear;
  }
  &:not(:hover) {
    transform: scale(1);
    transition: all 0.05s linear;
  }
  figure {
    height: 100%;
    display: flex;
    align-items: start;
    gap: 13%;
  }
  img {
    object-fit: cover;
    height: 96%;
    margin: 1%;
    border-radius: 10px;
  }
  figcaption {
    color: #74798cb5;
    font-size: 1.8rem;
    margin-top: 12%;
  }
`
