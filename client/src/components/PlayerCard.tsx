import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Box,
} from '@mui/material';
import { Player } from '../types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';

import { decreaseScore, increaseScore } from '../state/score/gameSlice';

interface PlayerCardProps {
  player: Player;
  id: number;
}

export const PlayerCard = ({ player, id }: PlayerCardProps) => {
  const dispatch = useDispatch();

  return (
    <Box display='flex'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography>{player.name}</Typography>
          <Typography>{player.score}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Eemalda mängia</Button>
        </CardActions>
      </Card>
      <Box display='flex' flexDirection='column' gap='10px' marginLeft='10px'>
        <Button
          onClick={() => dispatch(increaseScore(id))}
          sx={{ height: '50%' }}
          variant='contained'
          startIcon={<AddIcon />}
        />
        <Button
          onClick={() => dispatch(decreaseScore(id))}
          sx={{ height: '50%' }}
          variant='contained'
          startIcon={<RemoveIcon />}
        />
      </Box>
    </Box>
  );
};
