import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import type { TodoType } from '../../types/TodoTypes';

type TodoCardProps = {
  todo: TodoType;
  handleTextChange: (id: TodoType['id'], text: string) => void;
  handleSaveClick: (id: TodoType['id']) => void;
  handleCancelClick: () => void;
  deleteTodoHandler: (id: TodoType['id']) => void;
  handleToggleTodoState: (id: TodoType['id']) => void;
};

export default function TodoCard({
  todo,
  handleTextChange,
  handleSaveClick,
  handleCancelClick,
  deleteTodoHandler,
  handleToggleTodoState,
}: TodoCardProps): JSX.Element {
  const editingTodo = useAppSelector((state) => state.todos.editingTodo);

  const isEditing = editingTodo?.id === todo.id;

  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          {isEditing ? (
            <Input
              value={editingTodo?.todo || ''}
              onChange={(e) => handleTextChange(todo.id, e.target.value)}
            />
          ) : (
            <Heading size="md" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.todo}
            </Heading>
          )}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          {isEditing ? (
            <>
              <Button onClick={() => handleSaveClick(todo.id)} variant="solid" colorScheme="blue">
                Save
              </Button>
              <Button onClick={handleCancelClick} variant="solid" colorScheme="red">
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => handleTextChange(todo.id, todo.todo)}
                variant="solid"
                colorScheme="blue"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleToggleTodoState(todo.id)}
                variant="solid"
                colorScheme="green"
              >
                {todo.done ? 'Undo' : 'Complete'}
              </Button>
              <Button onClick={() => deleteTodoHandler(todo.id)} variant="solid" colorScheme="red">
                Delete
              </Button>
            </>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
