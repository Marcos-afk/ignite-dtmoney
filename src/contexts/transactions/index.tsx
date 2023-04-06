import { createContext, useEffect, useState } from 'react';
import {
  TransactionsContextProps,
  TransactionsProviderProps,
} from './TransactionsContextProps';
import { api } from '@services/api';
import { TransactionDTO } from '@dtos/transactions';

export const TransactionsContext = createContext(
  {} as TransactionsContextProps,
);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  const fetchTransactions = async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: { q: query },
    });
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
