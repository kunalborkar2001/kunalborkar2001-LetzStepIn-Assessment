import SlidingCard from "../../Components/SlidingCard/SlidingCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import property1 from "../../Assets/Property/property1.jpeg"
import "./Property.css"

const Property = () => {
  return (
    <div className="Property">
      <div >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1>Property</h1>
          </AccordionSummary>
          <AccordionDetails className='accordionCards'>
            <SlidingCard image={property1} />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Property