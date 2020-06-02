import React from 'react';
import './NavigationBar.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navigationbar container text-white navbar-light">
            <Navbar expand="lg">
                <NavLink className="navbar-brand text-white" to="/">Power <span className="yellow-text">X</span></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <NavLink className="menu-item" to="/home">Home</NavLink>
                        <NavLink className="menu-item" to="/services">Services</NavLink>
                        <NavLink className="menu-item" to="/classes">Our Classes</NavLink>
                        <NavLink className="menu-item" to="/about">About us</NavLink>
                        <NavLink className="menu-item" to="/blog">Blog</NavLink>
                        <NavLink className="menu-item" to="/pricing">Pricing</NavLink>
                        <NavLink className="menu-item" to="/contact">Contact us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;