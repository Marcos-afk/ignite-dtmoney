/* eslint-disable no-unused-vars */
import { TransactionDTO } from '@dtos/transactions';

export interface CreateTransactionProps {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

export interface TransactionsContextProps {
  transactions: TransactionDTO[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionProps) => Promise<void>;
}

export interface TransactionsProviderProps {
  children: React.ReactNode;
}
