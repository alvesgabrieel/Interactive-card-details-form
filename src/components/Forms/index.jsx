import * as S from './styles'

const Forms = () => {
  return (

    <>
    <S.Container>
      <S.Nome>Nome impresso no cartão</S.Nome>
      <S.Input type="text" name="" id="" placeholder='Maria Alves Santana'/>
      <S.Numero>Número do cartão</S.Numero>
      <S.Input type="number" name="" id="" placeholder='0000 0000 0000 0000'/>
      <S.Data>Data de vencimento</S.Data>
      <S.Cvv>Código cvc</S.Cvv>
    </S.Container>
    <S.InputSmallDiv>
        <S.InputSmall type="number" name="" id="" placeholder='05/29'/>
        <S.InputSmall type="number" name="" id="" placeholder='576'/>
    </S.InputSmallDiv>
    <S.DivBtn>
      <S.Btn>Confirmar</S.Btn>
    </S.DivBtn>

    </>

  )
}

export default Forms
