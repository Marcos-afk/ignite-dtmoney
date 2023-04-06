import { TransactionsContext } from '@contexts/transactions';
import { useContextSelector } from 'use-context-selector';

export const useSummary = () => {
  const { transactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        transactions: context.transactions,
      };
    },
  );

  return transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === 'income') {
        acc.income += transactions.price;
        acc.total += transactions.price;
      } else {
        acc.outcome += transactions.price;
        acc.total -= transactions.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );
};
