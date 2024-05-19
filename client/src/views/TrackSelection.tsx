import { Box, Button, Card } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const TrackSelection = () => {
  return (
    <Box>
      <Card variant='outlined'>
        <Button variant='outlined' startIcon={<PlayArrowIcon />}>
          Alusta
        </Button>
      </Card>
    </Box>
  );
};
