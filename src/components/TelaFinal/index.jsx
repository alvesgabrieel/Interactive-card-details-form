import * as S from './styles'
import Check from '../../../public/icon-complete.svg'

const TelaFinal = () => {
  return (
    <S.Container>
      <S.Img>
        <img src={Check} alt="" />
      </S.Img>
      <S.Text>
        <h3>OBRIGADO!</h3>
        <p>Informações de pagamento atualizada!</p>
      </S.Text>
    </S.Container>
  )
}

export default TelaFinal
