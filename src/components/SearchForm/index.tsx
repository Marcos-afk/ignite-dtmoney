import * as S from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormProps, SearchFormSchema, defaultValues } from './schemas';
import { useTransactions } from '@hooks/useTransactions';

export const SearchForm = () => {
  const { fetchTransactions } = useTransactions();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormProps>({
    defaultValues: defaultValues,
    resolver: zodResolver(SearchFormSchema),
  });

  const handleSearchTransactions = async (data: SearchFormProps) => {
    await fetchTransactions(data.query);
    reset();
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
        autoComplete="off"
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Pesquisar
      </button>
    </S.Container>
  );
};
