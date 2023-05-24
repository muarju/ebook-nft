import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="white" expand="lg" className='border-bottom'>
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/"> <img src='/images/Logo-extenso-preto.png' alt='logo' className='logo' /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">A Editora</Nav.Link>
                        <Nav.Link href="#link">Edições</Nav.Link>
                        <Nav.Link href="#link">Cultura</Nav.Link>
                        <Nav.Link href="#link">Digital</Nav.Link>
                        <Nav.Link href="#link">História e Património</Nav.Link>
                        <Nav.Link href="#link">Biblioteca</Nav.Link>
                        <Nav.Link href="#link">Livrarias</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
