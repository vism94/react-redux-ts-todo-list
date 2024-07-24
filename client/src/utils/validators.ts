import { z } from 'zod';

export const TodoSchema = z.object({
  id: z.number(),
  todo: z.string(),
  done: z.boolean(),
});

export const TodosSchema = z.array(TodoSchema)
