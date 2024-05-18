import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from '@mui/material';
import { Player } from '../types/player';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>{player.name}</Typography>
        <Typography>{player.score}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Eemalda mängia</Button>
      </CardActions>
    </Card>
  );
};
