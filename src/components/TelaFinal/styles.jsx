import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 453px;
  margin-top: 284px;
  position: relative;

  @media (max-width: 768px) {
      max-width: 70%;
      width: 100%;
      margin: 228px auto 0;
      align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1500px)  {
    margin-right: 200px;
  }
`
export const Img = styled.div`
  margin-right: 114px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
      margin: 0 auto;
      align-items: center;
  }
`

export const Text = styled.div`
  h3 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  p{
    color: #959595;

    @media (max-width: 768px) {
      margin: 0 auto;
      align-items: center;
      width: 301px;
    }
  }
`
