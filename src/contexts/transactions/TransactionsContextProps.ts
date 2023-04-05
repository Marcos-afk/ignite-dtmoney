import { TransactionDTO } from '@dtos/transactions';

export interface TransactionsContextProps {
  transactions: TransactionDTO[];
}

export interface TransactionsProviderProps {
  children: React.ReactNode;
}
