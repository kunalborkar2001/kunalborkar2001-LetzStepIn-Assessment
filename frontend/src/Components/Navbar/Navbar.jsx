import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='navLeft'>
                <img src="https://www.letzstepin.com/logo13.png" alt="www.letzstepin.com" />
            </div>
            <div className='navRight'>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#categorySection">Category</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar