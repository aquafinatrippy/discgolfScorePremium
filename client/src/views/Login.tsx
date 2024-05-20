import { Box, Button, Card, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';

export const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {isRegistered ? (
        <LoginForm setIsRegistered={setIsRegistered} />
      ) : (
        <RegisterForm setIsRegistered={setIsRegistered} />
      )}
    </Box>
  );
};
