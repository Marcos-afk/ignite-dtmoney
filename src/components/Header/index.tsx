import * as S from './styles';
import LogoSvg from '@assets/ignite-simbol.svg';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={LogoSvg} alt="Logo" />
        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.Content>
    </S.Container>
  );
};
