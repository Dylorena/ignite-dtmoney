
import { Dashboard } from './components/dashboard';
import { Header } from './components/header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () =>{
    SetIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () =>{
    SetIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  );
}

export default App;
