import SlidingCard from "../../Components/SlidingCard/SlidingCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import banquet1 from "../../Assets/Banquet/banquet1.jpeg"
import "./Banquet.css"

const Banquet = () => {
  return (
    <div className="Banquet" id="BanquetSection">
      <div >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1>Banquet</h1>
          </AccordionSummary>
          <AccordionDetails className='accordionCards'>
            <SlidingCard image={banquet1}/>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Banquet