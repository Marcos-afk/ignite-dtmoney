import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  NewTransactionFormProps,
  NewTransactionFormSchema,
  defaultValues,
} from './schemas';

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormProps>({
    defaultValues: defaultValues,
    resolver: zodResolver(NewTransactionFormSchema),
  });

  const handleAddNewTransaction = async (data: NewTransactionFormProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleAddNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
            autoComplete="off"
            required
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
            autoComplete="off"
            required
          />

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
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
};
