import { useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';

import {
  CreateTransactionProps,
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
      params: { q: query, _sort: 'createdAt', _order: 'desc' },
    });

    setTransactions(data);
  };

  const createTransaction = async (data: CreateTransactionProps) => {
    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date(),
    });

    setTransactions((prevState) => [response.data, ...prevState]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
