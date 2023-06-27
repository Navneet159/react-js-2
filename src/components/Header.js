import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


// import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {



    return (
        <>

            <Navbar expand="lg" className="navbar-bg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src='./assets/images/wagg-logo.png' alt='wagg-logo-img' ></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="">
                            <Nav.Link href="#home">
                                <Link to="./home">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#home">Dry Food</Nav.Link>
                            <Nav.Link href="#link">Dog Treats</Nav.Link>
                            <Nav.Link href="#home">Shop</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#home">
                                <Link to="./about">About Us</Link>
                            </Nav.Link>



                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Button className='btn-warning'>
                        <Link to="./contactvefe">Contact Us</Link>
                    </Button>
                </Container>
            </Navbar >


        </>

    );

}

export default Header;