import * as z from 'zod';

export const SearchFormSchema = z.object({
  search: z.string(),
});

export type SearchFormProps = z.infer<typeof SearchFormSchema>;

export const defaultValues = {
  search: '',
};
