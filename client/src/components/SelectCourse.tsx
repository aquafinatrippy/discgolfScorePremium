import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SelectCourse = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h6'>Rada nr:</Typography>
      <Box display='flex' alignItems='center'>
        <IconButton aria-label='delete' sx={{ fontSize: '3rem' }}>
          <AddIcon fontSize='inherit' />
        </IconButton>
        <Typography fontSize='2rem'>12</Typography>
        <IconButton aria-label='delete' sx={{ fontSize: '3rem' }}>
          <RemoveIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SelectCourse;
