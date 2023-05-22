import styled from "styled-components";

export const DivCartao = styled.div`
  background-image: url('../public/bg-card-front.png');
  background-repeat: no-repeat;
  height: 246px;
  width: 448px;
  position: absolute;
  left: 270px;
  top: 180px;

  @media (max-width: 768px) {
    left: 3vw;
    top: 18vh;
    height: 172px;
    width: 80.5vw;
    background-size: contain;
    position: relative;
    z-index: 1;
  }
`

