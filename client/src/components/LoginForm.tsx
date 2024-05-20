import { Box, Typography, TextField, Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

interface Props {
  setIsRegistered: Function;
}
export const LoginForm = ({ setIsRegistered }: Props) => {
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
  );
};
