import { Alert, AlertTitle } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Alert severity='error'>
      <AlertTitle>Vastet ei leitud</AlertTitle>
      Päringule ei leitud vastet. <Link to='/'>Tagasi esilehele</Link>
    </Alert>
  );
};
