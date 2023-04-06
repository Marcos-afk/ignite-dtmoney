import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  NewTransactionFormProps,
  NewTransactionFormSchema,
  defaultValues,
} from './schemas';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '@contexts/transactions';

export const NewTransactionModal = () => {
  const { createTransaction } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        createTransaction: context.createTransaction,
      };
    },
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormProps>({
    defaultValues: defaultValues,
    resolver: zodResolver(NewTransactionFormSchema),
  });

  const handleAddNewTransaction = async (data: NewTransactionFormProps) => {
    await createTransaction(data);
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

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <S.TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <S.TransactionTypeButton variant="income" value="income">
                  Entradas
                  <ArrowCircleUp size={32} />
                </S.TransactionTypeButton>

                <S.TransactionTypeButton variant="outcome" value="outcome">
                  Saídas
                  <ArrowCircleDown size={32} />
                </S.TransactionTypeButton>
              </S.TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
};
