import { useState } from 'react';
import { Player } from '../types/player';
import { Alert, Box } from '@mui/material';
import Controls from '../components/Controls';
import { PlayerCard } from '../components/PlayerCard';

const Home = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  console.log(players);

  return (
    <Box>
      <Controls addPlayerCallback={setPlayers} />
      <Box>
        {players.length ? (
          <Box display='flex' gap='8px' flexDirection='column'>
            {players.map(({ name, score }, index) => (
              <PlayerCard
                key={index}
                player={{
                  name,
                  score,
                }}
              />
            ))}
          </Box>
        ) : (
          <Alert severity='warning'>
            Mängu alustamiseks lisa vähemalt üks mängija.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Home;
