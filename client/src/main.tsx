import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './views/Login.tsx';
import { NotFound } from './views/NotFound.tsx';
import { Box } from '@mui/material';
import { Navigation } from './components/Navigation.tsx';
import { First } from './views/First.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100vh'
        width='100%'
      >
        <RouterProvider router={router} />
        <Navigation />
      </Box>
    </Provider>
  </React.StrictMode>
);
