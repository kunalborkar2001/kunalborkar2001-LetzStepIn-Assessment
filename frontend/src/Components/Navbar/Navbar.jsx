import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='navLeft'>
                <img src="https://www.letzstepin.com/logo13.png" alt="www.letzstepin.com" />
            </div>
            <div className='navRight'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar