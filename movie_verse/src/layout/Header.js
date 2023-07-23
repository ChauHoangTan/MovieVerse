<<<<<<< HEAD
import React, { useRef } from 'react';
import { Link, useLocation  } from 'react-router-dom';
=======
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
>>>>>>> 3b539c3e294b39d07922488ebe9a4be8d32be50c
import { useEffect } from 'react';
import logo from '../assets/images/logo/logo_3.png'
import search from '../assets/images/icon/search.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Header() {

    const homeLinkRef = useRef(null);
    const filmLinkRef = useRef(null)
    const actorLinkRef = useRef(null)

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" idName="header">
                <Container fluid>
                    <img src={logo} alt="Logo" className="logo-page" style={{ marginRight: "100px" }} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link ref={homeLinkRef} to="/" className="title">Home</Link>
                            <Link ref={filmLinkRef} to="/film" className="title">Film</Link>
                            <Link ref={actorLinkRef} to="/actor" className="title">Actor</Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="title">
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
                        <Nav>
                            <InputGroup className="right-container" style={{ marginRight: "30px" }} >
                                <Form.Control
                                    placeholder="Search..."
                                    aria-label="Search Bar"
                                    aria-describedby="Search Bar" />
                                <Button variant="warning">
                                    <img src={search} alt="Search" style={{ width: "25px" }} />
                                </Button>
                            </InputGroup>
                        </Nav>
                        <Nav>
                            <Button variant="warning" style={{ fontWeight: "bold" }}>
                                SIGN IN
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </>);
}

export default Header;