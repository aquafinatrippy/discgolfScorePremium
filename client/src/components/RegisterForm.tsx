import { Box, Typography, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

interface Props {
  setIsRegistered: Function;
}

export const RegisterForm = ({ setIsRegistered }: Props) => {
  return (
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
      <Button variant='contained' endIcon={<HowToRegIcon />}>
        Registreeri
      </Button>
      <Typography marginTop='30px' variant='h6'>
        Oled juba kasutaja?
      </Typography>
      <Button
        variant='outlined'
        startIcon={<LoginIcon />}
        onClick={() => setIsRegistered(true)}
      >
        Logi sisse
      </Button>
    </Box>
  );
};
