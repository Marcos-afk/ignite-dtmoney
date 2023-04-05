import * as S from './styles';
import { MagnifyingGlass } from 'phosphor-react';

export const SearchForm = () => {
  return (
    <S.Container>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={24} />
        Pesquisar
      </button>
    </S.Container>
  );
};
