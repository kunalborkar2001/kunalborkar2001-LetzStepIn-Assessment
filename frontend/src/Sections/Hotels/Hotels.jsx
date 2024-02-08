import SlidingCard from "../../Components/SlidingCard/SlidingCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import hotel1 from "../../Assets/Hotel/hotel1.jpeg"
import hotel2 from "../../Assets/Hotel/hotel2.jpeg"
import "./Hotels.css"

const Hotels = () => {
  return (
    <div className="Hotels" id="HotelSection">
      <div >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1>Hotels</h1>
          </AccordionSummary>
          <AccordionDetails className='accordionCards'>
            <SlidingCard image={hotel1} />
            <SlidingCard image={hotel2} />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Hotels