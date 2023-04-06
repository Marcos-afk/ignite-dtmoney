import * as z from 'zod';

export const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

export type NewTransactionFormProps = z.infer<typeof NewTransactionFormSchema>;

export const defaultValues: NewTransactionFormProps = {
  description: '',
  price: 0,
  category: '',
  type: 'income',
};
