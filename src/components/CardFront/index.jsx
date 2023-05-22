import * as S from './styles'
import logo from '../../../public/card-logo.svg'

const CardFront = ( {nome, numero, data } ) => {
  return (
    <S.DivCartao>
      <S.Cartao>
        <S.Img src={logo} alt="logo do cartao" />
        {numero !== '' ? <S.Numero>{numero}</S.Numero> : <S.Numero>0000 0000 0000 0000</S.Numero>}
        <S.nameAndDateContainer>
          {nome !== '' ? <S.Name>{nome}</S.Name> : <S.Name>MARIA ALVES SANTANA</S.Name>}
          {data !== '' ? <S.Date>{data}</S.Date> : <S.Date>07/29</S.Date>}
        </S.nameAndDateContainer>
      </S.Cartao>
    </S.DivCartao>
  )
}

export default CardFront
