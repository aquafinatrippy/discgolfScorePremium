import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from 'react';
import { Player } from '../types/player';

type Props = {
  addPlayerCallback: Function;
};

const Controls = ({ addPlayerCallback }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const handleAddPlayer = () => {
    addPlayerCallback((prev: Player[]) => {
      return [...prev, { name, score: 0 }];
    });
    setName('');
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <IconButton onClick={handleOpenDialog} aria-label='delete'>
        <GroupAddIcon />
      </IconButton>
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
