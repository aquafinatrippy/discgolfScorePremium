import { Box, Button, Modal, Typography } from '@mui/material';
import Home from './views/Home';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Game } from './types';
import { First } from './views/TrackSelection';

function App() {
  return (
    <Box display='flex' justifyContent='center'>
      <Home />
    </Box>
  );
}

export default App;
