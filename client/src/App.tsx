import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import CounterPage from './components/pages/CounterPage';
import TodoPage from './components/pages/TodoPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/counter',
          element: <CounterPage />,
        },
        {
          path: '/todos',
          element: <TodoPage />,
        }
      ],

    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
