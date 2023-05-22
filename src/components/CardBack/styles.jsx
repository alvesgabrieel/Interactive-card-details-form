import styled from "styled-components";

export const DivCartao = styled.div`
  background-image: url('../public/bg-card-back.png');
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
`
