import styled from "styled-components";
import cardBack from '../../../public/bg-card-back.png'

export const DivCartao = styled.div`
  background-image: url(${cardBack});
  background-repeat: no-repeat;
  height: 246px;
  width: 448px;
  position: absolute;
  left: 380px;
  top: 466px;

  @media (max-width: 768px) {
    left: 12vw;
    top: 4.5vh;
    height: 172px;
    width: 80.5vw;
    background-size: contain;
  }

  @media (min-width: 768px) and (max-width: 1500px)  {
    top: 365px;
    left: 15vw;
  }
`

export const NumeroCVV = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 109px;
  margin-left: 274px;
  color: #fff;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-top: 71px;
    margin-left: 169px;
  }
`
