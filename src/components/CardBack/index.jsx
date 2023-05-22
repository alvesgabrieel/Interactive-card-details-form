import * as S from './styles'

const CardBack = ({ cvc }) => {
  return (
    <S.DivCartao>
      {cvc !== '' ? <S.NumeroCVV>{cvc}</S.NumeroCVV> : <S.NumeroCVV>576</S.NumeroCVV>}
    </S.DivCartao>
  )
}

export default CardBack
