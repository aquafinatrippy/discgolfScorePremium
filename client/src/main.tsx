import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import { Login } from './views/Login.tsx';
import { Box } from '@mui/material';
import { Navigation } from './components/Navigation.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { First } from './views/TrackSelection.tsx';
import { History } from './views/History.tsx';

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
        <Router>
          <Routes>
            <Route path='/' element={<First />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<App />} />
            <Route path='/history' element={<History />} />
          </Routes>
          <Navigation />
        </Router>
      </Box>
    </Provider>
  </React.StrictMode>
);
