import React from 'react';
import JoinUs from '../home/JoinUs';
import NavBar from '../navBar/NavBar';

const Header = () => {
    return (
        <header className="header">
            <NavBar />
            <JoinUs/>
        </header>
    );
};

export default Header;