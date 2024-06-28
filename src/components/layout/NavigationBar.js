import styles from './NavigationBar.module.css';
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../img/gidle_logo_white.png";

function NavigationBar() {
    return (
        <>
            <Navbar className={styles.customNavbar}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} width={50} height={50} alt="(G)I-DLE logo" />
                        </Link>
                    </Navbar.Brand>
                    <Nav className={styles.customLinks}>
                        <Nav.Link><Link to="/">Início</Link></Nav.Link>
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