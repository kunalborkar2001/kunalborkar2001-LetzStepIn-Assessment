import React from 'react';
import SlidingCard from "../../Components/SlidingCard/SlidingCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import restaurant1 from '../../Assets/Restaurant/restaurant1.jpeg'
import restaurant2 from '../../Assets/Restaurant/restaurant2.jpeg'
import restaurant3 from '../../Assets/Restaurant/restaurant3.jpeg'
import "./Restaurants.css"

const Restaurants = () => {
  return (
    <div className="Restaurants">
      <div >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1>Restaurants</h1>
          </AccordionSummary>
          <AccordionDetails className='accordionCards'>
            <SlidingCard image={restaurant1}/>
            <SlidingCard image={restaurant2}/>
            <SlidingCard image={restaurant3}/>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  )
}

export default Restaurants