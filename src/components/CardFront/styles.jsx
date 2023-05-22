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

export const Cartao = styled.div`
  padding: 25px;
`

export const Img = styled.img`
  @media (max-width: 768px) {
    height: 37px;
  }
`

export const Numero = styled.div`
  margin-top: 60px;
  font-size: 27px;
  letter-spacing: 4px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 19px;
    letter-spacing: 2px;
    margin-top: 32px;
  }
`

export const nameAndDateContainer = styled.div`
  margin-top: 20px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const Name =styled.span`
  color: #fff;

`
export const Date =styled.span`
  color: #fff;
  margin-right: 27px;

  @media (max-width: 768px) {
    margin-right: 8px;
  }
`

