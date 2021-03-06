import React from 'react';
import { Container } from './transactionsTable.style';
import { useEffect } from 'react';
import { api } from '../../services/api';

// import { Container } from './styles';

const TransactionsTable = () => {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])
    
  return (
      <Container>
          <table>
              <thead>
                  <tr>
                      <th>Título</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Data</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Desenv de site</td>
                      <td className="deposit">R$12.000</td>
                      <td>desenvolvimento</td>
                      <td>20/02/2021</td>
                  </tr>
                  <tr>
                      <td>Aluguel</td>
                      <td className="withdraw"> - R$5.000</td>
                      <td>casa</td>
                      <td>17/02/2021</td>
                  </tr>
              </tbody>
          </table>
      </Container>
  )
}

export default TransactionsTable;