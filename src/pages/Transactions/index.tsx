import * as S from './styles';
import { Header } from '@components/Header';
import { SearchForm } from '@components/SearchForm';
import { Summary } from '@components/Summary';
import { useEffect, useState } from 'react';
import { api } from '@services/api';
import { TransactionDTO } from '@dtos/transactions';

export const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const { data } = await api.get('/transactions');
      setTransactions(data);
    };

    loadTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <S.Container>
        <SearchForm />
        <S.Table>
          <tbody>
            {transactions &&
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      R${transaction.price}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{String(transaction.createdAt)}</td>
                </tr>
              ))}
          </tbody>
        </S.Table>
      </S.Container>
    </div>
  );
};
