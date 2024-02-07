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
                            <MenuItem value={10}>Universities</MenuItem>
                            <MenuItem value={20}>Colleges</MenuItem>
                            <MenuItem value={30}>Schools</MenuItem>
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
                            <MenuItem value={10}>Hotels</MenuItem>
                            <MenuItem value={20}>Resorts</MenuItem>
                            <MenuItem value={30}>Bed and Breakfasts</MenuItem>
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
                            <MenuItem value={10}>Apartments/Flats</MenuItem>
                            <MenuItem value={20}>Houses</MenuItem>
                            <MenuItem value={30}>Condominiums</MenuItem>
                            <MenuItem value={40}>Townhouses</MenuItem>
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
                            <MenuItem value={10}>Cuisine Types (e.g., Italian, Mexican, Asian, etc.)</MenuItem>
                            <MenuItem value={20}>Fine Dining</MenuItem>
                            <MenuItem value={30}>Casual Dining</MenuItem>
                            <MenuItem value={40}>Coffee Shops</MenuItem>
                            <MenuItem value={50}>Bakeries</MenuItem>
                            <MenuItem value={60}>Vegetarian/Vegan Options</MenuItem>
                            <MenuItem value={70}>Family-Friendly Restaurants</MenuItem>
                            <MenuItem value={80}>Outdoor Dining</MenuItem>
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
                            <MenuItem value={10}>Bar Types (e.g., Sports Bars, Wine Bars, Brewpubs, etc.)</MenuItem>
                            <MenuItem value={20}>Live Music Venues</MenuItem>
                            <MenuItem value={30}>Cocktail Bars</MenuItem>
                            <MenuItem value={40}>Dive Bars</MenuItem>
                            <MenuItem value={50}>Pub Grub</MenuItem>
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
                            <MenuItem value={10}>Wedding Venues</MenuItem>
                            <MenuItem value={20}>Corporate Event Spaces</MenuItem>
                            <MenuItem value={30}>Conference Centers</MenuItem>
                        </Select>
                    </FormControl>
                </li>
            </ul>
        </div>
    )
}

export default Navigator