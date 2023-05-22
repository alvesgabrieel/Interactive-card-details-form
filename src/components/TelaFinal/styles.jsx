import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 453px;
  margin-top: 284px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    margin-right: 52px;
    margin-top: 210px;
  }
`
export const Img = styled.div`
  margin-right: 114px;
  margin-bottom: 30px;
`

export const Text = styled.div`
  h3 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  p{
    color: #959595;
  }
`
