import { Box, Button, Input, Stack } from '@chakra-ui/react';
import React from 'react';

type TodoFormProps = {
  todoSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function TodoForm({ todoSubmitHandler }: TodoFormProps): JSX.Element {
  return (
    <Box onSubmit={todoSubmitHandler} as="form" mt={3} >
      <Stack spacing={3}>
        <Input name="todo" placeholder="enter todo" size="md" />
        <Button type="submit" colorScheme="blue">
          ok
        </Button>
      </Stack>
    </Box>
  );
}
