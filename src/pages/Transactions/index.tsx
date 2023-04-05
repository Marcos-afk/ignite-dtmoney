import * as S from './styles';
import { Header } from '@components/Header';
import { Summary } from '@components/Summary';

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />
      <S.Container>
        <S.Table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <S.PriceHighlight variant="outcome">-R$ 59,00</S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </S.Table>
      </S.Container>
    </div>
  );
};
