import { Box, Typography, Button, styled } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '80px',
  minWidth: '100%',
  minHeight: '80px',
  fontSize: '25px',
}));

export const First = () => {
  const navigate = useNavigate();

  return (
    <Box display='flex' justifyContent='center' marginTop='40px'>
      <Box display='flex' flexDirection='column' gap='20px' width='90%'>
        <Typography variant='h4'>Vali või loo rada</Typography>

        <Box display='flex' flexDirection='column' gap='30px' marginTop='20px'>
          <StyledButton
            fullWidth
            variant='contained'
            endIcon={<PlayArrowIcon />}
            onClick={() => navigate('/home')}
          >
            Alusta ilma rajata
          </StyledButton>
          <StyledButton
            fullWidth
            variant='contained'
            endIcon={<PlayArrowIcon />}
          >
            Loo rada
          </StyledButton>
          <StyledButton
            fullWidth
            variant='contained'
            endIcon={<PlayArrowIcon />}
          >
            Vali rada
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};
