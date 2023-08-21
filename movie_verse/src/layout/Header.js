import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

import avatar from '../assets/images/avatar/avatar.png'
import { useSelector } from 'react-redux';
function Header() {

    const stateAccount = useSelector(state=> state.stateAccount.stateAccount)

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" idName="header">
                <Container fluid>
                    <img src={logo} alt="Logo" className="logo-page" style={{ marginRight: "100px" }} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link to="/" className="title">Home</Link>
                            <Link to="/film" className="title">Film</Link>
                            <Link to="/actor" className="title">Actor</Link>
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
                            {sessionStorage.getItem('token') === null ? 
                                (<Button variant="warning" style={{ fontWeight: "bold" }}>
                                <Link to="/login" className='text-dark text-decoration-none'>Sign In</Link>
                            </Button>) :
                                <img src={avatar} style={{width: '50px', height:'50px', borderRadius: '50%'}}/>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </>);
}

export default Header;