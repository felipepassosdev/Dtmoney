import React, { useState } from 'react';
import Modal from 'react-modal'
import { GlobalStyle } from './styles/stylesglobal';
import { Header } from './components/Header/header';
import { Dashboard } from './components/Dashboard/dashbord';
import TransactionModal from './components/TransactionModal/transactionModal';

Modal.setAppElement('#root')

export function App() {
  const [isTransectionModalOpen, setIsTransectionModalOpen] = useState(false)

    function handleOpenTransectionModal() {
        setIsTransectionModalOpen(true);
    }

    function handleCloseTransectionModal() {
        setIsTransectionModalOpen(false);
    }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransectionModal}/>
      <Dashboard/>
      <TransactionModal 
        isOpen={isTransectionModalOpen}
        onRequestClose={handleCloseTransectionModal}
      />
      <GlobalStyle/>
    </>
  );
}

export default App;
