import { TransactionsContext } from '@contexts/transactions';
import { useContext } from 'react';

export const useTransactions = () => {
  return useContext(TransactionsContext);
};
