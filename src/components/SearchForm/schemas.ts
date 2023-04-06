import * as z from 'zod';

export const SearchFormSchema = z.object({
  query: z.string(),
});

export type SearchFormProps = z.infer<typeof SearchFormSchema>;

export const defaultValues = {
  query: '',
};
