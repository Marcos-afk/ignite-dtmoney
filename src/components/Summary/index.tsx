import * as S from './styles';
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';

export const Summary = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.Card>

      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.Card>

      <S.Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.Card>
    </S.Container>
  );
};
