import React, { useEffect } from 'react';
import Route from "react-router-dom";
import { NavLink } from "react-router-dom";
import './App.css';
import Button from './theme-app';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Pnavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ position: "fixed", width: "100%" }}>
            <Container>
                <Navbar.Brand href="/">New zealand</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto w-100">
                    <Nav className="ml-auto">
                        <Nav.Link href="/places-to-visit" id="nav-links">Places to visit</Nav.Link>
                        <Nav.Link href="/food-places-to-visit" id="nav-links">Food places</Nav.Link>
                        <Nav.Link href="/gallery" id="nav-links">Gallery</Nav.Link>
                        <Nav.Link href="/about" id="nav-links">About</Nav.Link>
                        <Nav.Link href="/contact" id="nav-links">Contact</Nav.Link>
                        <Button />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Pnavbar;
