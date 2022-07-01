import { Container } from "./styles";
import incomingImg from '../../assets/income.svg'
import outcomoutgImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomingImg} alt="" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  )
}