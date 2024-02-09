import { Button } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./SampleNavbar.css"
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function SampleNavbar() {
    return (
        <div className='Navbar'>
            <Navbar expand="lg" className="bg-body-tertiary sampleNavbar" collapse="md">
                <Container fluid style={{ alignItems: "end" }}>
                    <Navbar.Brand href="#">
                        <Link to={"/"}>
                            <img style={{ height: "60px", width: "200px" }} src="https://www.letzstepin.com/logo13.png" alt="www.letzstepin.com" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" style={{ paddingLeft: "20px" }}>
                        <Nav
                            className="mr-auto"
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><Chip style={{ textDecoration: 'none', color: 'inherit' }} label="Home" component="a" href="#Home" clickable /></Nav.Link>
                            <Nav.Link href="#action2"><Chip style={{ textDecoration: 'none', color: 'inherit' }} label="Catagory" component="a" href="#categorySection" clickable /></Nav.Link>
                            <Nav.Link href="#action3"><Chip style={{ textDecoration: 'none', color: 'inherit' }} label="Contact Us" component="a" href="#ContactUs" clickable /></Nav.Link>
                        </Nav>
                        <div className="d-flex flex-column align-items-center justify-content-center flex-md-row">
                            <Form className="d-flex mb-3 mb-md-0 me-md-3" style={{ gap: "20px" }}>
                                <SearchBar />
                            </Form>
                            <Button variant="contained" size='small' style={{ marginLeft: "20px" }}>Sign In</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default SampleNavbar;
