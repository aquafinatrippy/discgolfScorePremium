import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Person2Icon from '@mui/icons-material/Person2';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100', height: '100px' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label='Ajalugu'
          icon={<RestoreIcon />}
          onClick={() => navigate('/history')}
        />
        <BottomNavigationAction
          label='Aktiivne mäng'
          icon={<SportsEsportsIcon />}
          onClick={() => navigate('/home')}
        />
        <BottomNavigationAction
          label='Profiil'
          icon={<Person2Icon />}
          onClick={() => navigate('/login')}
        />
      </BottomNavigation>
    </Box>
  );
};
