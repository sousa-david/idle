import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../img/gidle_logo.png";

function NavigationBar() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand>
                        <Link to="/idle"><img src={logo} width={50} height={50} alt="(G)I-DLE logo" /></Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/idle">Início</Link></Nav.Link>
                        <Nav.Link><Link to="/members">Membros</Link></Nav.Link>
                        <Nav.Link><Link to="/discography">Discografia</Link></Nav.Link>
                        <Nav.Link><Link to="/links">Links</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar