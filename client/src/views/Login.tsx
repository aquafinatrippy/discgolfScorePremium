import { Box, Button, Card, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useState } from 'react';

export const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {isRegistered ? (
        <Box
          width='80%'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '80px',
          }}
        >
          <Typography variant='h5'>Logi sisse</Typography>
          <TextField id='outlined-basic' label='Email' variant='outlined' />
          <TextField id='outlined-basic' label='Parool' variant='outlined' />
          <Button variant='contained' endIcon={<LoginIcon />}>
            Logi sisse
          </Button>
          <Typography marginTop='30px' variant='h6'>
            Ei ole veel kasutaja?
          </Typography>
          <Button
            variant='outlined'
            startIcon={<HowToRegIcon />}
            onClick={() => setIsRegistered(false)}
          >
            Registreeri
          </Button>
        </Box>
      ) : (
        <Box
          width='80%'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '80px',
          }}
        >
          <Typography variant='h5'>Registeeri</Typography>
          <Box display='flex' gap='4px'>
            <TextField id='outlined-basic' label='Eesnimi' variant='outlined' />
            <TextField
              id='outlined-basic'
              label='Perekonnanimi'
              variant='outlined'
            />
          </Box>

          <TextField id='outlined-basic' label='Email' variant='outlined' />
          <TextField id='outlined-basic' label='Parool' variant='outlined' />
          <Button variant='contained' endIcon={<LoginIcon />}>
            Registreeri
          </Button>
          <Typography marginTop='30px' variant='h6'>
            Oled juba kasutaja?
          </Typography>
          <Button
            variant='outlined'
            startIcon={<HowToRegIcon />}
            onClick={() => setIsRegistered(true)}
          >
            Logi sisse
          </Button>
        </Box>
      )}
    </Box>
  );
};
