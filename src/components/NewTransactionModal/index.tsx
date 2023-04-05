import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form action="#">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <S.TransactionTypeButton variant="income" value="income">
              Entradas
              <ArrowCircleUp size={32} />
            </S.TransactionTypeButton>

            <S.TransactionTypeButton variant="outcome" value="outcome">
              Saídas
              <ArrowCircleDown size={32} />
            </S.TransactionTypeButton>
          </S.TransactionType>
          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
};
