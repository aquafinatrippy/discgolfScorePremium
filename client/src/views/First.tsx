import { Box, Modal, Typography, Button, styled } from '@mui/material';
import { useState } from 'react';
import { Game } from '../types';
import Home from './Home';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link, useNavigate } from 'react-router-dom';

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',

//   boxShadow: 24,
//   p: 4,
// };

const StyledButton = styled(Button)(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '80px',
  minWidth: '100%',
  minHeight: '80px',
  fontSize: '25px',
}));

export const First = () => {
  return (
    <Box display='flex' justifyContent='center' marginTop='40px'>
      <Box display='flex' flexDirection='column' gap='20px' width='90%'>
        <Typography variant='h4'>Vali või loo rada</Typography>

        <Box display='flex' flexDirection='column' gap='30px' marginTop='20px'>
          <StyledButton
            fullWidth
            variant='contained'
            endIcon={<PlayArrowIcon />}
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
