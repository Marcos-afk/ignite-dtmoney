/* eslint-disable no-unused-vars */
import { TransactionDTO } from '@dtos/transactions';

export interface TransactionsContextProps {
  transactions: TransactionDTO[];
  fetchTransactions: (query?: string) => Promise<void>;
}

export interface TransactionsProviderProps {
  children: React.ReactNode;
}
