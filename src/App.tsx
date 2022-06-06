import styled from 'styled-components'
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  color: #8257e6;
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Title>Hello word</Title>
    </div>
  );
}

export default App;
