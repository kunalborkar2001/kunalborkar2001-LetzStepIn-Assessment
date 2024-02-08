import React from 'react';
import SlidingCard from "../../Components/SlidingCard/SlidingCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import pub1 from "../../Assets/Pubs/pub1.jpeg"
import pub2 from "../../Assets/Pubs/pub2.jpeg"
import pub3 from "../../Assets/Pubs/pub3.jpeg"
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
            <SlidingCard image={pub1}/>
            <SlidingCard image={pub2}/>
            <SlidingCard image={pub3}/>
          </AccordionDetails>
        </Accordion>



      </div>
    </div>
  );
}

export default Pubs;
