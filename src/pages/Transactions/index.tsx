import * as S from './styles';
import { Header } from '@components/Header';
import { SearchForm } from '@components/SearchForm';
import { Summary } from '@components/Summary';
import { TransactionsContext } from '@contexts/transactions';
import { currencyFormatter, dateFormatter } from '@utils/formatter';
import { useContextSelector } from 'use-context-selector';

export const Transactions = () => {
  const { transactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        transactions: context.transactions,
      };
    },
  );

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
                      {transaction.type === 'outcome' && '- '}
                      {currencyFormatter.format(transaction.price)}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              ))}
          </tbody>
        </S.Table>
      </S.Container>
    </div>
  );
};
