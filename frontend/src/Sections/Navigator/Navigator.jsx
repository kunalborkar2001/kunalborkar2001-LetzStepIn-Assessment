import "./Navigator.css"
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navigator = () => {
    return (
        <div className="Navigator">
            <ul>
                <li>
                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                        <InputLabel id="Education">Education</InputLabel>
                        <Select
                            labelId="Education"
                            id="Education"
                            label="Education"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li>
                    <FormControl sx={{ m: 1, minWidth: 200 }} >
                        <InputLabel id="Hotel/Room">Hotel/Room Booking</InputLabel>
                        <Select
                            labelId="Hotel/Room"
                            id="Hotel/Room"
                            label="Hotel/Room"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li>
                    <FormControl sx={{ m: 1, minWidth: 200 }} >
                        <InputLabel id="Property/Real-Estate">Property/Real-Estate</InputLabel>
                        <Select
                            labelId="Property/Real-Estate"
                            id="Property/Real-Estate"
                            label="Property/Real-Estate"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li>
                    <FormControl sx={{ m: 1, minWidth: 200 }} >
                        <InputLabel id="Restaurants">Restaurants & Cafes</InputLabel>
                        <Select
                            labelId="Restaurants"
                            id="Restaurants"
                            label="Restaurants"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li>
                    <FormControl sx={{ m: 1, minWidth: 80 }} >
                        <InputLabel id="Pubs">Pubs</InputLabel>
                        <Select
                            labelId="Pubs"
                            id="Pubs"
                            label="Pubs"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li>
                    <FormControl sx={{ m: 1, minWidth: 150 }} >
                        <InputLabel id="Banquet">Banquet Halls</InputLabel>
                        <Select
                            labelId="Banquet"
                            id="Banquet"
                            label="Banquet"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </li>
            </ul>
        </div>
    )
}

export default Navigator