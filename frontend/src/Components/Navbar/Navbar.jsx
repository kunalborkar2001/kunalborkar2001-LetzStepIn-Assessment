import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css'
import Button from '@mui/material/Button';

const Navbar = () => {
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
                    <li><a href="#Home"><Button variant="contained"  >Home</Button></a></li>
                    <li><a href="#categorySection"><Button variant="contained" >Catagory</Button></a></li>
                    <li><a href="#ContactUs"><Button variant="contained">Contact Us</Button></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar