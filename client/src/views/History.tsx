import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export const History = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography>Rada | Kuupaev</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Mangia nimi</Typography>
          <Typography>Mangia skoor</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
