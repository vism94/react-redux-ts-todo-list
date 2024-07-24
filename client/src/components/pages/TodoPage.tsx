import { SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import useTodos from '../../hooks/useTodos';
import TodoForm from '../ui/TodoForm';
import TodoCard from '../ui/TodoCard';

export default function TodoPage(): JSX.Element {
    const { todos, todoSubmitHandler, handleTextChange,
      handleSaveClick,
      handleCancelClick,
      deleteTodoHandler,
      handleToggleTodoState, } = useTodos();
    
  return (
    <>
      <TodoForm todoSubmitHandler={todoSubmitHandler}/>
      <SimpleGrid columns={3} spacing={5}>
        {todos.map((el) => (
          <TodoCard todo={el} key={el.id} handleTextChange={handleTextChange} handleToggleTodoState={handleToggleTodoState} handleSaveClick={handleSaveClick} handleCancelClick={handleCancelClick} deleteTodoHandler={deleteTodoHandler}/>
        ))}
      </SimpleGrid>
    </>
  )
}
