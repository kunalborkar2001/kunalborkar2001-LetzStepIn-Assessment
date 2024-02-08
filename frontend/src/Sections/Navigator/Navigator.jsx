import "./Navigator.css"
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
                            <MenuItem value={10}><a href="#EducationSection">Universities</a></MenuItem>
                            <MenuItem value={20}><a href="#EducationSection">Colleges</a></MenuItem>
                            <MenuItem value={30}><a href="#EducationSection">Schools</a></MenuItem>

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
                            <MenuItem value={10}><a href="#HotelSection">Hotels</a></MenuItem>
                            <MenuItem value={20}><a href="#HotelSection">Resorts</a></MenuItem>
                            <MenuItem value={30}><a href="#HotelSection">Bedand Breakfasts</a></MenuItem>

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
                            <MenuItem value={10}><a href="#PropertySection">Apartments/Flats</a></MenuItem>
                            <MenuItem value={20}><a href="#PropertySection">Houses</a></MenuItem>
                            <MenuItem value={30}><a href="#PropertySection">Condominiums</a></MenuItem>
                            <MenuItem value={40}><a href="#PropertySection">Townhouses</a></MenuItem>

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
                            <MenuItem value={10}><a href="#RestaurantsSection">Cuisine Types (e.g., Italian, Mexican, Asian, etc.)</a></MenuItem>
                            <MenuItem value={20}><a href="#RestaurantsSection">Fine Dining</a></MenuItem>
                            <MenuItem value={30}><a href="#RestaurantsSection">Casual Dining</a></MenuItem>
                            <MenuItem value={40}><a href="#RestaurantsSection">Coffee Shops</a></MenuItem>
                            <MenuItem value={50}><a href="#RestaurantsSection">Bakeries</a></MenuItem>
                            <MenuItem value={60}><a href="#RestaurantsSection">Vegetarian/Vegan Options</a></MenuItem>
                            <MenuItem value={70}><a href="#RestaurantsSection">Family-Friendly Restaurants</a></MenuItem>
                            <MenuItem value={80}><a href="#RestaurantsSection">Outdoor Dining</a></MenuItem>

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
                            <MenuItem value={10}><a href="#PubsSection">Bar Types (e.g., Sports Bars, Wine Bars, Brewpubs, etc.)</a></MenuItem>
                            <MenuItem value={20}><a href="#PubsSection">Live Music Venues</a></MenuItem>
                            <MenuItem value={30}><a href="#PubsSection">Cocktail Bars</a></MenuItem>
                            <MenuItem value={40}><a href="#PubsSection">Dive Bars</a></MenuItem>
                            <MenuItem value={50}><a href="#PubsSection">Pub Grub</a></MenuItem>

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
                            <MenuItem value={10}><a href="#BanquetSection">Wedding Venues</a></MenuItem>
                            <MenuItem value={20}><a href="#BanquetSection">Corporate Event Spaces</a></MenuItem>
                            <MenuItem value={30}><a href="#BanquetSection">Conference Centers</a></MenuItem>

                        </Select>
                    </FormControl>
                </li>
            </ul>
        </div>
    )
}

export default Navigator