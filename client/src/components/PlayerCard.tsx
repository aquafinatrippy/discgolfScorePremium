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

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
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
          sx={{ height: '50%' }}
          variant='contained'
          startIcon={<AddIcon />}
        />
        <Button
          sx={{ height: '50%' }}
          variant='contained'
          startIcon={<RemoveIcon />}
        />
      </Box>
    </Box>
  );
};
