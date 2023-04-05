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

  useEffect(() => {
    const loadTransactions = async () => {
      const { data } = await api.get('/transactions');
      setTransactions(data);
    };

    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
