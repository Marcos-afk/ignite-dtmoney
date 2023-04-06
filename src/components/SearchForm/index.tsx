import * as S from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormProps, SearchFormSchema, defaultValues } from './schemas';

export const SearchForm = () => {
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('search')}
        autoComplete="off"
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Pesquisar
      </button>
    </S.Container>
  );
};
