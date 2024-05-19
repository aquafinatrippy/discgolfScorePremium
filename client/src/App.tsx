import { Box, Button, Modal, Typography } from '@mui/material';
import Home from './views/Home';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box display='flex' justifyContent='center'>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} display='flex' flexDirection='column' gap='20px'>
          <Typography variant='h5'>Vali rada või loo enda randa</Typography>

          <Button fullWidth variant='contained' endIcon={<PlayArrowIcon />}>
            Alusta ilma rajata
          </Button>
        </Box>
      </Modal>
      <Home />
    </Box>
  );
}

export default App;
