import { z } from 'zod';

export const newTodoSchema = z
  .object({
    todo: z.string(),
  })
  .strip();

export type NewTodoDto = z.infer<typeof newTodoSchema>;
