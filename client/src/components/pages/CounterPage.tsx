import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { increment, decrement, incrementBy } from '../../redux/counter/counterSlice'

export default function CounterPage(): JSX.Element {
    const counter = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
  return (
    <Box>
        <h1>{counter}</h1>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementBy(5))}>Increment by 5</Button>
    </Box>
  )
}

