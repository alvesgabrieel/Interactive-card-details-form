import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 400px;
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
    margin-top: 210px;
  }
`

//Inputs

export const Input = styled.input`
  height: 40px;
  width: 400px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  margin-bottom: 32px;
  padding: 12px;

  @media (max-width: 768px) {
    height: 45px;
    width: 358px;
    margin-right: 14px;
    margin-bottom: 12px;
  }
`

export const InputSmall = styled.input`
  height: 40px;
  width: 157px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 12px;
  margin-right: 85px;

  @media (max-width: 768px) {
    height: 45px;
    width: 170px;
    margin-right: 14px;
  }
`

export const InputSmallDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 315px;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
      justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 1500px)  {
    margin-right: 114px;
  }
`

//Titulos

export const Nome = styled.h3`
  margin-right: 169px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 30px;
    width: 358px;
    margin-right: 14px;
    margin-bottom: 0px;
  }
`
export const Numero = styled.h3`
  margin-right: 238px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 30px;
    width: 358px;
    margin-right: 14px;
    margin-bottom: 0px;
  }
`
export const Data = styled.h3`
  margin-right: 218px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-left: 18px;
    width: 150px;
  }

`
export const Cvv = styled.h3`
  position: absolute;
  top: 210px;
  right: 56px;
  display: block;

  @media (max-width: 768px) {
    top: 197px;
    right: 50px;
  }
`

//botão

export const DivBtn = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 400px;
  margin-top: 35px;

  @media (max-width: 768px) {
    width: 86%;
    margin: 30px 19px 0px 25px;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1500px)  {
    margin-right: 198px;
  }
`

export const Btn = styled.button`
  height: 50px;
  width: 400px;
  border-radius: 10px;
  border: 1px solid #32033a;
  background-color: #32033a;
  color: #fff;
  cursor: pointer;

  &:hover{
    background-color: #440450;
  }

  @media (max-width: 768px) {

  }
`
