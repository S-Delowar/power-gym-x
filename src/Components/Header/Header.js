import React from 'react';
import './Header.scss';
import NavigationBar from '../Navbar/NavigationBar';

const Header = () => {
    return (
        <div className="header-section fixed-top bg-secondary">
            <NavigationBar></NavigationBar>
        </div>
    );
};

export default Header;