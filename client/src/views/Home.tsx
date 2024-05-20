import { Alert, Box } from '@mui/material';
import Controls from '../components/Controls';

import { useSelector } from 'react-redux';

import { RootState } from '../state/store';
import SelectCourse from '../components/SelectCourse';
import { PlayerCard } from '../components/PlayerCard';

const Home = () => {
  // const [players, setPlayers] = useState<Player[]>([]);
  const players = useSelector(
    (state: RootState) => state.gameStore.game.players
  );

  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap='40px'>
      <Controls />
      {players.length && <SelectCourse />}
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
                id={index}
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
