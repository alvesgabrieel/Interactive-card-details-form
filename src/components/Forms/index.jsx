import MaskedInput from 'react-input-mask';
import { useState } from 'react'
import * as S from './styles'
import CardFront from '../CardFront'
import CardBack from '../CardBack'
import TelaFinal from '../TelaFinal';

const Forms = () => {
  const [nome, setNome] = useState('')
  const [numero, setNumeroCartao] = useState('')
  const [data, setData] = useState('')
  const [cvc, setCvc] = useState('')

  const [telaFinal, setTelaFinal] = useState(true)

  const setarNome = (e) => {
    setNome(e.target.value.toUpperCase())
  }

  const setarNumeroCartao = (e) => {
    setNumeroCartao(e.target.value)
  }

  const setarData = (e) => {
    setData(e.target.value)
  }

  const setarCvc = (e) => {
    setCvc(e.target.value)
  }


  const mudarTela = () => {
    if(telaFinal) {
      setTelaFinal(!telaFinal)
    } else {
      setTelaFinal(!telaFinal)
      setNome('')
      setNumeroCartao('')
      setData('')
      setCvc('')
    }
  }

  return (
    <>
      <CardFront nome={nome} numero={numero} data={data} />
      <CardBack cvc={cvc}/>
      {telaFinal ? (
        <div>
        <S.Container>
          <S.Nome>Nome impresso no cartão</S.Nome>
          <S.Input onChange={setarNome} type="text" name="" id="" placeholder='Maria Alves Santana'/>
          <S.Numero>Número do cartão</S.Numero>
          <MaskedInput
            mask="9999 9999 9999 9999"
            value={numero}
            onChange={setarNumeroCartao}
          >
          {(inputProps) => (
            <S.Input
              {...inputProps}
                id=""
                type="text"
                name=""
                placeholder="0000 0000 0000 0000"
            />
          )}
          </MaskedInput>
          <S.Data>Data de vencimento</S.Data>
          <S.Cvv>Código cvc</S.Cvv>
        </S.Container>
        <S.InputSmallDiv>
          <MaskedInput
              mask="99/99"
              value={data}
              onChange={setarData}
            >
            {(inputProps) => (
              <S.InputSmall
                {...inputProps}
                  id=""
                  type="text"
                  name=""
                  placeholder="07/29"
              />
            )}
            </MaskedInput>
            <MaskedInput
              mask="999"
              value={cvc}
              onChange={setarCvc}
            >
            {(inputProps) => (
              <S.InputSmall
                {...inputProps}
                  id=""
                  type="text"
                  name=""
                  placeholder="576"
              />
            )}
            </MaskedInput>
        </S.InputSmallDiv>
        <S.DivBtn>
          <S.Btn onClick={mudarTela}>Confirmar</S.Btn>
        </S.DivBtn>
      </div>
      ) : (
        <>
          <TelaFinal />
          <S.DivBtn>
          <S.Btn onClick={mudarTela}>Finalizar</S.Btn>
          </S.DivBtn>
        </>
      )}
    </>
  )
}

export default Forms
