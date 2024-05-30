import { Box, Typography, Button, styled } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

export const First = () => {
  const navigate = useNavigate();

  return (
    <Box display='flex' justifyContent='center' marginTop='40px'>
      <Box display='flex' flexDirection='column' gap='20px' width='90%'>
        <Typography variant='h4'>Vali või loo rada</Typography>

        <Box display='flex' flexDirection='column' gap='30px' marginTop='20px'>
          <Button
            fullWidth
            variant='contained'
            endIcon={<PlayArrowIcon />}
            onClick={() => navigate('/home')}
            size='large'
          >
            Alusta ilma rajata
          </Button>
          <Button
            fullWidth
            variant='contained'
            size='large'
            endIcon={<PlayArrowIcon />}
          >
            Loo rada
          </Button>
          <Button
            fullWidth
            variant='contained'
            size='large'
            endIcon={<PlayArrowIcon />}
          >
            Vali rada
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
