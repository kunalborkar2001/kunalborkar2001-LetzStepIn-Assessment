import SlidingCard from "../../Components/SlidingCard/SlidingCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Education.css"
import education1 from "../../Assets/Education/education1.jpeg"
import education2 from "../../Assets/Education/education2.jpeg"


const Education = () => {
  return (
    <div className="Education">
      <div >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1>Education</h1>
          </AccordionSummary>
          <AccordionDetails className='accordionCards'>
            <SlidingCard  image={education1}/>
            <SlidingCard  image={education2} />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Education