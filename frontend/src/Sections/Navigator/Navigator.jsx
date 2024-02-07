import "./Navigator.css"
import Button from '@mui/material/Button';

const Navigator = () => {
    return (
        <div className="Navigator">
            <ul>
                <li>
                    <Button variant="outlined">
                        Education
                    </Button>
                </li>
                <li>
                    <Button variant="outlined">
                        Hotel/Room Booking
                    </Button>
                </li>
                <li>
                    <Button variant="outlined">
                        Property/Real-Estate
                    </Button>
                </li>
                <li>
                    <Button variant="outlined">
                        Restaurants & Cafes
                    </Button>
                </li>
                <li>
                    <Button variant="outlined">
                        Pubs
                    </Button>
                </li>
                <li>
                    <Button variant="outlined">
                        Banquet Halls
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default Navigator