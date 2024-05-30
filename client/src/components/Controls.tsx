import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from 'react';
import { Player } from '../types';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../state/score/gameSlice';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';

const SmallButton = styled(Button)(({ theme }) => ({
  maxWidth: '50%',
  maxHeight: '80px',
  minWidth: '50%',
  minHeight: '55px',
  fontSize: '25px',
}));

const RegularButton = styled(Button)(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '80px',
  minWidth: '100%',
  minHeight: '55px',
  fontSize: '25px',
}));

const Controls = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [par, setPar] = useState<number>(3);
  const [basketNumber, setBasketNumber] = useState<number>(1);

  const dispatch = useDispatch();

  const handleAddPlayer = () => {
    dispatch(addPlayer({ name, score: 0 }));
    setName('');
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  const handleParChange = () => {
    setPar((prevPar) => (prevPar === 3 ? 4 : 3));
  };

  return (
    <Box width='100%'>
      <Box marginBottom='0.5em'>
        <Typography
          display='flex'
          justifyContent='center'
          fontSize='1.5em'
          fontWeight='bold'
        >
          PAR {par}
        </Typography>
      </Box>
      <Box gap={1} display='flex' marginBottom='1em'>
        <Button
          onClick={handleOpenDialog}
          aria-label='delete'
          endIcon={<GroupAddIcon />}
          variant='contained'
          size='large'
          fullWidth
        >
          Mangia
        </Button>
        <Button
          onClick={handleParChange}
          aria-label='delete'
          endIcon={<ChangeCircleIcon />}
          variant='contained'
          size='large'
          fullWidth
        >
          Par
        </Button>
      </Box>
      <Box>
        <Typography
          display='flex'
          justifyContent='center'
          fontSize='1.5em'
          fontWeight='bold'
        >
          Korv nr. {basketNumber}
        </Typography>
      </Box>
      <Box
        justifyContent='center'
        display='flex'
        flexDirection='column'
        gap='0.5em'
        width='100%'
      >
        <Button
          aria-label='delete'
          endIcon={<RedoIcon />}
          variant='contained'
          fullWidth
          size='large'
          onClick={() => setBasketNumber(basketNumber + 1)}
        >
          Jargmine korv
        </Button>
        <Button
          onClick={() => setBasketNumber(basketNumber - 1)}
          aria-label='delete'
          endIcon={<UndoIcon />}
          variant='contained'
          size='large'
          fullWidth
        >
          Eelmine Korv
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleOpenDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' variant='h5'>
          Lisa mängia
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            id='standard-basic'
            label='nimi'
            variant='standard'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddPlayer}>LISA</Button>
          <Button onClick={handleOpenDialog} autoFocus>
            SULGE
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Controls;
