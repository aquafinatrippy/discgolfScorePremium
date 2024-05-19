import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Box,
} from '@mui/material';
import { Player } from '../types/player';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { decrement, increment } from '../state/score/scoreSlice';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  const score = useSelector((state: RootState) => state.score.value);
  const dispatch = useDispatch();

  return (
    <Box display='flex'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography>{player.name}</Typography>
          <Typography>{score}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Eemalda mängia</Button>
        </CardActions>
      </Card>
      <Box display='flex' flexDirection='column' gap='10px' marginLeft='10px'>
        <Button
          onClick={() => dispatch(increment())}
          sx={{ height: '50%' }}
          variant='contained'
          startIcon={<AddIcon />}
        />
        <Button
          onClick={() => dispatch(decrement())}
          sx={{ height: '50%' }}
          variant='contained'
          startIcon={<RemoveIcon />}
        />
      </Box>
    </Box>
  );
};
