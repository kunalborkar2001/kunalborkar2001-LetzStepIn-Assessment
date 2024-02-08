import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navbar = () => {
    const [burgger, setBurgger] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1111) {
                setBurgger(true);
            } else {
                setBurgger(false);
            }
        };

        // Set initial state based on window width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='Navbar'>
            <div className='navLeft'>
                <img src="https://www.letzstepin.com/logo13.png" alt="www.letzstepin.com" />
            </div>
            <div className='NavSearchBar'>
                <SearchBar />
            </div>
            <div className='navRight'>
                <ul>
                    <li><a href="#Home"><Button variant="contained" size='small'>Home</Button></a></li>
                    <li><a href="#categorySection"><Button variant="contained" size='small'>Catagory</Button></a></li>
                    <li><a href="#ContactUs"><Button variant="contained" size='small'>Contact Us</Button></a></li>
                </ul>
            </div>

            {burgger &&
                <FormControl sx={{ m: 1, minWidth: 60 }} size="small" className='burger'>
                    <InputLabel id="demo-select-small-label"><i class="fa-solid fa-burger"></i></InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"

                        label="Catagory"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}><a href="#Home">Home</a></MenuItem>
                        <MenuItem value={20}><a href="#categorySection">categorySection</a></MenuItem>
                        <MenuItem value={30}><a href="#ContactUs">ContactUs</a></MenuItem>
                    </Select>
                </FormControl>
            }
        </div>
    )
}

export default Navbar;
