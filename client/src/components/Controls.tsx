import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from 'react';

type Props = {
  addPlayerCallback: () => void;
};

const Controls = ({}: Props) => {
  const [open, setOpen] = useState<boolean>(false);

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
        <DialogTitle id='alert-dialog-title'>
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenDialog}>Disagree</Button>
          <Button onClick={handleOpenDialog} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Controls;
