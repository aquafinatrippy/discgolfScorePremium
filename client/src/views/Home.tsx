import { useState } from 'react';
import { Player } from '../types/player';
import { Box } from '@mui/material';
import Controls from '../components/Controls';

const Home = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  console.log(players);

  return (
    <Box>
      <Controls addPlayerCallback={setPlayers} />
    </Box>
  );
};

export default Home;
