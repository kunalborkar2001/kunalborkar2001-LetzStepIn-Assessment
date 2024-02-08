import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';

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
            <Link to={"/"}>
                    <img src="https://www.letzstepin.com/logo13.png" alt="www.letzstepin.com" />
            </Link>
                </div>
            <div className='NavSearchBar'>
                <SearchBar />
            </div>
            <div className='navRight'>
                <ul>
                    <li><Chip style={{ textDecoration: 'none', color: 'inherit' }} label="Home" component="a" href="#Home" clickable /></li>
                    <li><Chip style={{ textDecoration: 'none', color: 'inherit' }} label="Catagory" component="a" href="#categorySection" clickable /></li>
                    <li><Chip style={{ textDecoration: 'none', color: 'inherit' }} label="Contact Us" component="a" href="#ContactUs" clickable /></li>
                    <li><a href="#!"><Button variant="contained" size='small'>Sign In</Button></a></li>

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
                        <MenuItem value={40}><a href="#!">Sign In</a></MenuItem>
                    </Select>
                </FormControl>
            }
        </div>
    )
}

export default Navbar;
