import { useTransactions } from '@hooks/useTransactions';
import * as S from './styles';
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { currencyFormatter } from '@utils/formatter';

export const Summary = () => {
  const { transactions } = useTransactions();
  const theme = useTheme();

  const summary = transactions.reduce(
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

  return (
    <S.Container>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </header>

        <strong>{currencyFormatter.format(summary.income)}</strong>
      </S.Card>

      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>{currencyFormatter.format(summary.outcome)}</strong>
      </S.Card>

      <S.Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>{currencyFormatter.format(summary.total)}</strong>
      </S.Card>
    </S.Container>
  );
};
