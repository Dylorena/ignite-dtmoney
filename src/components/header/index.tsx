import logo from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
  onpenNewTransactionModal: () => void
}

export function Header({ onpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
