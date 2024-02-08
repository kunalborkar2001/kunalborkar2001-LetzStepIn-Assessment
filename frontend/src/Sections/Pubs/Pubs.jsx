import React from 'react';
import SlidingCard from "../../Components/SlidingCard/SlidingCard";
import hotel from "../../Assets/hotel.jpeg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Pubs.css";

const Pubs = () => {
  return (

    <div className="Pubs">
      <div >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1>PUBS</h1>
          </AccordionSummary>
          <AccordionDetails className='accordionCards'>
            <SlidingCard />
            <SlidingCard />
            <SlidingCard />
          </AccordionDetails>
        </Accordion>



      </div>
    </div>
  );
}

export default Pubs;
